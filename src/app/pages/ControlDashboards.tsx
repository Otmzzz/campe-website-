import { CampEPageLayout } from './GovernanceControlReview';

export function ControlDashboards() {
  return (
    <CampEPageLayout
      label="CAMPE SOLUTION LINE"
      title="Control Dashboards"
      subtitle="CampE designs dashboard systems that make sales, inventory, workflow, financial exposure, and execution status easier to review and control."
      focusLabel="Dashboard Control Focus"
      focusItems={[
        'Sales review',
        'Inventory control',
        'Workflow status',
        'Financial exposure',
      ]}
      problemTitle="Dashboards only help when they support control decisions."
      problemBody="Many reports show activity without showing what needs attention. Leadership may see totals and charts, but still miss late work, weak handoffs, inventory issues, approval delays, or exposure that should be reviewed before it becomes costly."
      approachTitle="CampE designs dashboards around decisions, exceptions, and ownership."
      approachItems={[
        'Leadership review requirement gathering',
        'KPI and exception definition',
        'Data source and refresh review',
        'Dashboard page structure',
        'Control threshold design',
        'Review flow and handover planning',
      ]}
      deliverablesTitle="Dashboard structures built for repeated management review."
      deliverables={[
        'Dashboard page plan',
        'Control KPI structure',
        'Exception and threshold logic',
        'Data refresh workflow',
        'Leadership review notes',
        'Optional dashboard improvement roadmap',
      ]}
      bestFitTitle="Useful when leaders need to review status without chasing updates."
      bestFit={[
        'Retail and inventory operations',
        'Teams managing sales and fulfillment status',
        'Businesses with manual reporting cycles',
        'Owners needing faster exception visibility',
        'Management teams improving accountability',
      ]}
    />
  );
}
