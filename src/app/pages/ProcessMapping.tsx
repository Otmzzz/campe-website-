import { CampEPageLayout } from './GovernanceControlReview';

export function ProcessMapping() {
  return (
    <CampEPageLayout
      label="CAMPE SOLUTION LINE"
      title="Process Mapping"
      subtitle="CampE maps how work actually moves across people, documents, systems, and approvals so weak handoffs and unclear ownership become visible."
      focusLabel="Process Visibility Focus"
      focusItems={[
        'Actual workflow',
        'Document movement',
        'System handoffs',
        'Approval ownership',
      ]}
      problemTitle="Most process problems hide between official steps."
      problemBody="Teams may know the formal process, but daily work often moves through side conversations, manual trackers, repeated clarifications, and undocumented exceptions. These hidden handoffs make delays, errors, and accountability gaps difficult for leadership to see."
      approachTitle="CampE maps the real workflow before recommending structure."
      approachItems={[
        'Current-state workflow review',
        'People, document, and system mapping',
        'Handoff and approval analysis',
        'Exception and rework identification',
        'Ownership and escalation clarification',
        'Future-state process recommendations',
      ]}
      deliverablesTitle="A process view that exposes where work gets weak."
      deliverables={[
        'Current-state process map',
        'Handoff and ownership notes',
        'Approval and exception view',
        'Weak point observations',
        'Future-state recommendations',
        'Optional implementation roadmap',
      ]}
      bestFitTitle="Helpful when work moves through too many informal paths."
      bestFit={[
        'Teams with unclear handoffs',
        'Operations dependent on manual trackers',
        'Businesses with repeated delays or rework',
        'Owners needing clearer accountability',
        'Organizations preparing for system or dashboard design',
      ]}
      ctaTitle="Need to see how work really moves?"
    />
  );
}
