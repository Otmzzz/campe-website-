import { CampEPageLayout } from './GovernanceControlReview';

export function RiskVisibility() {
  return (
    <CampEPageLayout
      label="CAMPE SOLUTION LINE"
      title="Risk Visibility"
      subtitle="CampE exposes operational blind spots across data, workflow, access, accountability, and reporting so leaders can act before risks become losses."
      focusLabel="Risk Visibility Focus"
      focusItems={[
        'Data blind spots',
        'Workflow exposure',
        'Access risk',
        'Accountability gaps',
      ]}
      problemTitle="Operational risk often becomes visible only after it has already cost the business."
      problemBody="Weak controls can sit inside everyday work: unclear approvals, unmanaged access, unreliable reports, missing documentation, and processes owned by memory. Without a deliberate risk view, leadership reacts after issues surface instead of seeing exposure early."
      approachTitle="CampE makes operational exposure visible and actionable."
      approachItems={[
        'Risk source identification',
        'Workflow and accountability review',
        'Access and reporting exposure review',
        'Control weakness mapping',
        'Leadership risk prioritization',
        'Practical mitigation planning',
      ]}
      deliverablesTitle="A focused view of risks leadership can address."
      deliverables={[
        'Operational risk map',
        'Blind spot summary',
        'Control weakness register',
        'Priority risk recommendations',
        'Mitigation action notes',
        'Optional control improvement roadmap',
      ]}
      bestFitTitle="Built for teams that need to see risk before it becomes damage."
      bestFit={[
        'Businesses with unclear control ownership',
        'Operations relying on manual checks',
        'Teams with inconsistent reporting',
        'Owners concerned about access and accountability',
        'Leadership groups preparing for stronger governance',
      ]}
    />
  );
}
