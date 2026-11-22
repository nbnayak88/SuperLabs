export const chapters = [
{title:'Create contracts with confidence',short:'Create',outcome:'A draft built from reliable source data.',steps:[
['Bring your data forward','Start with supplier, value and project details already connected to your agreement.','Imported agreement','Agreement details'],
['Choose the right starting point','A rules-based template gives your team a consistent foundation.','Recommended template','Template library'],
['Assemble relevant clauses','Use the agreement context to include the clauses and commercial terms you need.','Context-aware assembly','Clause assembly'],
['Work across languages','Keep local and global teams aligned with a bilingual agreement.','Bilingual agreement','Language workspace']]},
{title:'Collaborate and negotiate',short:'Collaborate',outcome:'One agreement. A shared conversation.',steps:[
['Bring the conversation together','Discuss contract questions alongside your agreement, without losing context.','Team conversation','Collaboration'],
['See what changed','Compare versions side by side before deciding which changes to accept.','Version comparison','Compare versions'],
['Review a suggested clause','Review an illustrative assistant suggestion against your contracting policy.','Assisted review','Policy review'],
['Coauthor in one workspace','Let procurement and legal review the same draft with a shared activity history.','Shared draft','Coauthoring'],
['Coordinate your reviewers','A clear review group makes ownership and the required responses visible.','Review group','Review workflow'],
['Invite supplier feedback','Keep external suggestions connected to the current agreement version.','Supplier negotiation','Supplier review']]},
{title:'Make informed approval decisions',short:'Approve',outcome:'Visible exceptions. Accountable decisions.',steps:[
['Surface the exceptions','Show departures from standard terms so legal reviewers can focus their attention.','Contract deviations','Deviation review'],
['Understand the risk signals','View illustrative clause risks and the action each one needs.','Risk summary','Risk analysis'],
['Review the final changes','Check the difference between the initial draft and the version awaiting approval.','Approval comparison','Final comparison'],
['Route to the right people','Assign the approval path using value, clause exceptions and business ownership.','Approval route','Approval workflow']]},
{title:'Manage the agreement after signing',short:'Manage',outcome:'Commitments stay visible after execution.',steps:[
['Give every obligation an owner','Track the business owner, due date and reminder for each commitment.','Obligation register','Commitments'],
['Ask a contract question','Read a sample assistant response that links an answer back to its clause.','Contract assistant','Contract insights'],
['Focus on the right signals','See a role-focused portfolio view of renewals and obligations.','Portfolio dashboard','Portfolio overview'],
['Keep amendments connected','Preserve a visible relationship between the agreement and subsequent changes.','Agreement family','Amendments'],
['Decide the next chapter','Review renewal and closure options before the notice deadline.','Renewal decision','Renewals']]},
{title:'Connect sourcing to payment',short:'Connect',outcome:'Commercial intent follows the transaction.',steps:[
['Connect the sourcing award','Carry the awarded supplier and sourcing reference into the agreement.','Sourcing handoff','Award to agreement'],
['Align the commercial details','Keep the agreed rates, quantities and line items together.','Commercial schedule','Contract line items'],
['Carry terms into purchasing','Use the agreed price when the business creates a purchase request.','Purchase request','Buying compliance'],
['Trace the commercial outcome','Compare the agreement, order and invoice to spot a price difference.','Compliance review','Price compliance'],
['Complete your product journey','You have followed an agreement from source data to commercial execution.','Journey complete','Contract lifecycle']]}
];
export const allSteps=chapters.flatMap((c,ci)=>c.steps.map((step,si)=>({ci,si,step})));
