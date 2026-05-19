import { CampEPageLayout } from './GovernanceControlReview';

export function SystemsArchitecture() {
  return (
    <CampEPageLayout
      label="CAMPE SERVICE LINE"
      title="Systems Architecture"
      subtitle="CampE structures business processes, data flows, roles, and control points into operating systems that are easier to manage, monitor, and improve."
      focusLabel="Operating System Focus"
      focusItems={[
        'Process structure',
        'Data flow',
        'Role clarity',
        'Control points',
      ]}
      problemTitle="A business can grow faster than its operating structure."
      problemBody="As teams add tools, trackers, approvals, and reports, work can become harder to manage even when everyone is busy. Without a clear architecture, leadership struggles to see how information moves, who owns each step, and where control should exist."
      approachTitle="CampE designs the structure behind better execution."
      approachItems={[
        'Current process and data flow review',
        'Role and responsibility mapping',
        'Control point identification',
        'Operating model structuring',
        'Reporting and escalation design',
        'Implementation sequence planning',
      ]}
      deliverablesTitle="A clearer blueprint for how work should operate."
      deliverables={[
        'Systems architecture map',
        'Process and data flow structure',
        'Role and control point matrix',
        'Reporting flow recommendations',
        'Implementation priorities',
        'Optional improvement roadmap',
      ]}
      bestFitTitle="Useful when work is moving, but the system is hard to manage."
      bestFit={[
        'Growing teams with scattered workflows',
        'Operations using many disconnected tools',
        'Owners needing clearer responsibility lines',
        'Businesses preparing for dashboard or system builds',
        'Teams improving governance and accountability',
      ]}
      ctaTitle="Need a clearer operating structure?"
    />
  );
}
