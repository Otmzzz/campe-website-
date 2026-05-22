import { CampEPageLayout } from './GovernanceControlReview';

export function CloudITAdvisory() {
  return (
    <CampEPageLayout
      label="CAMPE SERVICE LINE"
      title="Cloud and IT Advisory"
      subtitle="CampE helps organizations review cloud ownership, user access, deployment control, contractor work, and operational technology risks before they become governance problems."
      focusLabel="Technology Control Focus"
      focusItems={[
        'Cloud ownership',
        'User access',
        'Deployment control',
        'Contractor oversight',
      ]}
      problemTitle="Technology risk often begins as unclear ownership."
      problemBody="Cloud tools, user permissions, vendor access, and deployment practices can spread across teams without a single control view. When ownership is unclear, leadership may not know who can access critical systems, how changes are deployed, or where contractor work creates operational dependency."
      approachTitle="CampE brings structure to the technology layer of operations."
      approachItems={[
        'Cloud account and ownership review',
        'User access and permission review',
        'Deployment and change control assessment',
        'Contractor work and handover review',
        'Operational technology risk mapping',
        'Leadership advisory findings',
      ]}
      deliverablesTitle="Clear findings for stronger technology governance."
      deliverables={[
        'Cloud ownership summary',
        'Access control observations',
        'Deployment control notes',
        'Contractor dependency review',
        'Technology risk register',
        'Practical improvement roadmap',
      ]}
      bestFitTitle="Designed for teams using technology faster than controls mature."
      bestFit={[
        'Organizations with shared cloud accounts',
        'Teams using contractors or external developers',
        'Businesses with unclear access ownership',
        'Operations relying on manual deployment practices',
        'Leadership teams preparing for stronger IT governance',
      ]}
    />
  );
}
