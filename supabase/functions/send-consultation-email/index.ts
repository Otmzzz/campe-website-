import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const notifyEmail = Deno.env.get("CAMPE_NOTIFY_EMAIL");
    const fromEmail =
      Deno.env.get("CAMPE_FROM_EMAIL") ||
      "CampE Consultation <noreply@campetechnologies.com>";

    if (!resendApiKey || !notifyEmail) {
      return new Response(
        JSON.stringify({
          error: "Missing RESEND_API_KEY or CAMPE_NOTIFY_EMAIL",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const body = await req.json();

    const name = body.name || body.full_name || body.fullName || "Not provided";
    const email = body.email || "Not provided";
    const phone = body.phone || body.mobile || "Not provided";
    const company =
      body.company || body.organization || body.business_name || "Not provided";
    const service =
      body.service || body.area_of_interest || body.interest || "Not specified";
    const message = body.message || body.notes || "No message provided.";
    const requestId = body.id || body.request_id || "Not available";
    const createdAt = body.created_at || new Date().toISOString();

    const subject = `New CampE Consultation Request — ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        <h2 style="margin-bottom: 4px;">New CampE Consultation Request</h2>
        <p style="margin-top: 0; color: #475569;">
          A new consultation request was submitted through the CampE Technologies website.
        </p>

        <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Name</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${escapeHtml(phone)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Company / Organization</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${escapeHtml(company)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Area of Interest</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${escapeHtml(service)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Message</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${escapeHtml(message)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Request ID</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${escapeHtml(requestId)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Submitted At</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${escapeHtml(createdAt)}</td>
          </tr>
        </table>

        <p style="margin-top: 18px; color: #64748b; font-size: 13px;">
          This notification was generated from the CampE Technologies website consultation form.
        </p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [notifyEmail],
        subject,
        html,
        reply_to:
          typeof email === "string" && email.includes("@") ? email : undefined,
      }),
    });

    const resendResult = await resendResponse.json();

    if (!resendResponse.ok) {
      return new Response(
        JSON.stringify({
          error: "Failed to send email",
          details: resendResult,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        email: resendResult,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Unexpected function error",
        details: String(error),
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});