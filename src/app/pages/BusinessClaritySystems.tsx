import { CampEPageLayout } from './GovernanceControlReview';

export function BusinessClaritySystems() {
  return (
    <CampEPageLayout
      label="CAMPE SOLUTION LINE"
      title="Business Clarity Systems"
      subtitle="CampE helps leadership convert scattered information, unclear workflows, and fragmented reporting into one clearer operating structure."
      focusLabel="Clarity System Focus"
      focusItems={[
        'Information structure',
        'Workflow visibility',
        'Reporting alignment',
        'Decision control',
      ]}
      problemTitle="Leadership can have many updates and still lack one clear view."
      problemBody="Information often sits across spreadsheets, messages, system exports, and informal team knowledge. The result is a business that depends on manual follow-up instead of a reliable operating structure for seeing priorities, exceptions, and accountability."
      approachTitle="CampE turns scattered operating signals into a clearer system."
      approachItems={[
        'Information source review',
        'Workflow and responsibility mapping',
        'KPI and control view definition',
        'Reporting structure design',
        'Leadership review rhythm',
        'Improvement priority mapping',
      ]}
      deliverablesTitle="A practical structure for clearer management."
      deliverables={[
        'Business clarity map',
        'Information source inventory',
        'Workflow and ownership view',
        'KPI and review structure',
        'Reporting flow recommendations',
        'Optional improvement roadmap',
      ]}
      bestFitTitle="Built for leaders who need fewer scattered signals."
      bestFit={[
        'Owners managing through manual updates',
        'Teams with fragmented reporting',
        'Operations with unclear workflow status',
        'Businesses preparing for dashboards or governance',
        'Management teams needing one operating view',
      ]}
    />
  );
}
