export type BlogSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string
  readTime: string
  introduction: string[]
  sections: BlogSection[]
  conclusion: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-private-ai-matters',
    title: 'Why Private AI Matters',
    description: 'A practical guide to deciding when private AI is worth the investment and where hybrid architectures make more sense.',
    category: 'AI Strategy',
    publishedAt: '2026-07-17',
    readTime: '7 min read',
    introduction: [
      'Many organizations begin with public cloud AI because it is fast, capable, and easy to test. The harder question comes later: should sensitive data, internal knowledge, or business-critical workflows continue to depend entirely on a shared external platform?',
      'Private AI is not simply a model installed behind a firewall. It is an architecture and operating model that gives an organization greater control over data, identity, access, retention, observability, and change. For some workloads, that control is essential. For others, it adds cost without enough value.',
    ],
    sections: [
      {
        heading: 'Private AI is a control decision',
        paragraphs: [
          'A system does not become private merely because it runs locally. Privacy depends on the entire path data follows: how it is collected, transmitted, stored, retrieved, logged, reviewed, and deleted.',
          'The practical goal is to define who may access which information, what the model is allowed to do with it, how activity is audited, and what happens when the system is wrong.',
        ],
        bullets: [
          'Classify sensitive data and define handling rules.',
          'Use identity-based permissions instead of shared AI accounts.',
          'Set retention rules for prompts, responses, logs, and source documents.',
          'Require human review for consequential decisions or external communications.',
        ],
      },
      {
        heading: 'Where private AI creates value',
        paragraphs: [
          'Private AI is most valuable when an organization possesses information that is both sensitive and strategically useful. Examples include internal procedures, customer records, contracts, product designs, incident reports, clinical or legal documents, and proprietary research.',
          'It can also help when availability and latency matter. A dedicated deployment may provide predictable response times, continue operating during an external outage, or support environments with limited internet access.',
        ],
      },
      {
        heading: 'The costs do not disappear',
        paragraphs: [
          'Private AI replaces some vendor costs with engineering and operational responsibilities. Models need infrastructure, security updates, evaluation, monitoring, capacity planning, and upgrade management.',
          'That can make private deployment the wrong answer for an early experiment, a low-risk workflow, or a team without the capacity to operate it. The technology should earn its complexity through a clear requirement.',
        ],
      },
      {
        heading: 'Hybrid architectures often win',
        paragraphs: [
          'Many organizations do not need an all-or-nothing choice. Sensitive retrieval and document processing can remain inside a controlled environment while a managed model handles approved, de-identified, or low-risk work.',
          'The strongest designs place models behind a governed application layer. Permissions, citations, audit logs, business rules, and workflow state remain under organizational control. The model performs a bounded reasoning task rather than becoming the entire system.',
        ],
      },
      {
        heading: 'A practical decision framework',
        paragraphs: ['Classify the workload before debating platforms. Identify the data involved, the consequence of disclosure, the consequence of an incorrect answer, expected usage, latency needs, integration requirements, and the team that will operate the solution.'],
        bullets: [
          'Use managed AI when speed, broad capability, and low operational overhead dominate.',
          'Use private or dedicated AI when isolation, residency, or data control are firm requirements.',
          'Use hybrid architecture when different workflow steps have different risks.',
          'Use conventional software when rules, search, SQL, or automation can solve the problem more reliably.',
        ],
      },
    ],
    conclusion: [
      'Private AI matters because control matters. The right question is not whether private AI is universally better. It is whether a particular process needs stronger control than a general managed service can provide economically and operationally.',
      'Start with workload classification and measurable outcomes, then use the smallest amount of AI and infrastructure needed to produce a trustworthy result.',
    ],
  },
  {
    slug: 'ollama-vs-cloud-ai',
    title: 'Ollama vs. Cloud AI: Choosing the Right Runtime',
    description: 'Compare local model runtimes such as Ollama with managed cloud AI across capability, privacy, cost, reliability, and operational burden.',
    category: 'Architecture',
    publishedAt: '2026-07-17',
    readTime: '7 min read',
    introduction: [
      'Ollama makes it easy to run a language model on a workstation or server. Managed cloud AI makes it easy to call a powerful model through an API. Both can look interchangeable during a demo, but they create very different production systems.',
      'The useful comparison is not local versus cloud as an ideology. It is a workload-by-workload decision involving capability, privacy, throughput, cost, reliability, and the organization’s willingness to operate infrastructure.',
    ],
    sections: [
      {
        heading: 'Where Ollama fits',
        paragraphs: [
          'Ollama is well suited to development, prototyping, private experimentation, and applications that benefit from running open models locally. It reduces setup friction by handling model downloads, serving, and a straightforward local API.',
          'A developer can test retrieval, classification, summarization, structured extraction, and workflow automation without first creating cloud resources or sending documents outside the local environment.',
        ],
        bullets: [
          'Fast local experimentation with open models.',
          'No per-request API charge during development.',
          'Direct control over the model version and host.',
          'Useful for disconnected or tightly controlled environments.',
        ],
      },
      {
        heading: 'Where managed cloud AI fits',
        paragraphs: [
          'Managed platforms typically provide access to larger models, elastic capacity, enterprise identity options, safety tooling, and operational support. They reduce the hardware and model-serving expertise the application team must maintain.',
          'They are attractive when demand is irregular. Instead of purchasing hardware for peak usage, an organization can pay for actual consumption and scale more quickly.',
        ],
      },
      {
        heading: 'Model quality changes the economics',
        paragraphs: [
          'A smaller local model may be inexpensive to run, but it is not inexpensive if lower accuracy creates more review work or failed automation. Conversely, using the strongest cloud model for every task wastes money when a small model, rules engine, or database query would work just as well.',
          'Compare the cost of a completed business task, not only token prices or hardware. Include retries, human correction, engineering time, monitoring, and the cost of errors.',
        ],
      },
      {
        heading: 'Operations are part of the product',
        paragraphs: [
          'A local runtime gives control but transfers responsibility. Someone must manage hardware, drivers, model files, capacity, security patches, backups, health checks, and upgrades. Once the service matters, a laptop under a desk is no longer an architecture.',
          'Cloud changes rather than removes operational risk. Rate limits, network failures, regional outages, model changes, and provider policies still need to be handled by the application.',
        ],
      },
      {
        heading: 'Use a routing layer',
        paragraphs: [
          'For many systems, the best answer is both. Put model access behind an application service, route tasks according to sensitivity and complexity, and preserve deterministic fallbacks for critical steps.',
          'This reduces provider lock-in and allows the system to use local control where it matters and managed capability where it earns its cost.',
        ],
      },
    ],
    conclusion: [
      'Ollama optimizes for local control and accessibility. Managed AI optimizes for capability, elasticity, and reduced infrastructure burden.',
      'Choose based on the economics and risks of the complete workflow. A modest hybrid design often outperforms a grand commitment to either extreme.',
    ],
  },
  {
    slug: 'reducing-ai-costs',
    title: 'Reducing AI Costs Without Crippling the System',
    description: 'Engineering patterns for reducing token usage and model spend while preserving quality, reliability, and auditability.',
    category: 'AI Operations',
    publishedAt: '2026-07-17',
    readTime: '8 min read',
    introduction: [
      'AI cost problems rarely begin with one expensive request. They emerge when a prototype becomes a workflow, usage grows, context accumulates, retries multiply, and every step is sent to the largest available model.',
      'Sustainable cost control comes from system design. Reserve expensive reasoning for the moments where it creates measurable value and use conventional software everywhere else.',
    ],
    sections: [
      {
        heading: 'Measure cost per completed task',
        paragraphs: [
          'Token cost is incomplete. A cheap request that fails repeatedly can cost more than one high-quality request. A low-cost model that creates extensive human review may be more expensive than a stronger model that completes the work correctly.',
          'Track documents processed, cases resolved, reports generated, or minutes saved. Capture model calls, latency, retries, failures, and review outcomes for that unit of work.',
        ],
      },
      {
        heading: 'Use deterministic software first',
        paragraphs: [
          'File validation, date parsing, calculations, database lookups, permission checks, routing rules, and exact transformations are usually better handled in code.',
          'A useful pattern is to let the model create a rule, extraction schema, mapping, or query during setup, validate it, and then execute the deterministic artifact repeatedly. Return to the model only when the input changes or the rule fails.',
        ],
        bullets: [
          'Use SQL for structured facts.',
          'Use parsers for stable formats.',
          'Use rules for known routing and approvals.',
          'Use code for calculations and validation.',
          'Use models for ambiguity, interpretation, and exceptions.',
        ],
      },
      {
        heading: 'Route to the smallest capable model',
        paragraphs: [
          'Classify requests by complexity. Simple extraction or tagging may use a small model. Difficult analysis can escalate to a stronger model. High-risk cases can move to human review.',
          'Model selection should belong to the application rather than being hard-coded into every workflow step.',
        ],
      },
      {
        heading: 'Control context deliberately',
        paragraphs: [
          'Long prompts often contain repeated instructions, irrelevant history, duplicate documents, and retrieval results that were never filtered. More context can increase cost, latency, and confusion.',
          'Summarize durable state, retrieve only relevant passages, remove duplicates, and store facts in databases or workflow state instead of replaying an entire transcript.',
        ],
      },
      {
        heading: 'Cache and validate',
        paragraphs: [
          'Cache embeddings, classifications, summaries, and metadata when the source and instructions have not changed. Invalidate the cache when the source or governing prompt changes.',
          'Require structured output when software consumes a response. Validate fields, types, allowed values, and citations. A targeted repair request is cheaper than rerunning an entire workflow blindly.',
        ],
      },
    ],
    conclusion: [
      'The most economical AI system is not the one with the cheapest model. It is the one that completes the business process reliably with the least total waste.',
      'Measure completed work, move stable steps into deterministic code, route by complexity, control context, cache durable results, and validate outputs.',
    ],
  },
  {
    slug: 'what-is-rag',
    title: 'What Is RAG, and When Should You Use It?',
    description: 'A plain-language explanation of retrieval-augmented generation, its architecture, common failure modes, and the use cases it fits.',
    category: 'Knowledge Systems',
    publishedAt: '2026-07-17',
    readTime: '8 min read',
    introduction: [
      'A language model does not automatically know an organization’s current policies, contracts, procedures, product documentation, or customer records. Retrieval-augmented generation, usually called RAG, gives an AI application a controlled way to consult approved information before answering.',
      'RAG is often described as chatting with documents. A production RAG system is more accurately a search and evidence pipeline wrapped around a language model.',
    ],
    sections: [
      {
        heading: 'How RAG works',
        paragraphs: [
          'Documents are collected from approved sources, cleaned, divided into useful passages, and indexed. When a user asks a question, the system searches for relevant passages and provides them to the model with instructions to answer from that evidence.',
          'A mature system also returns citations, applies access controls, records which sources were used, and declines to answer when evidence is insufficient.',
        ],
        bullets: [
          'Ingest and normalize source documents.',
          'Create searchable passages and metadata.',
          'Apply user and document permissions.',
          'Retrieve and rank relevant evidence.',
          'Generate a constrained answer with citations.',
        ],
      },
      {
        heading: 'Where RAG is a strong fit',
        paragraphs: [
          'RAG works well when people repeatedly need answers from a changing body of text. Internal policies, technical manuals, procedures, research libraries, support knowledge, and product documentation are common examples.',
          'It is especially useful when an answer must cite its source so the user can inspect the evidence.',
        ],
      },
      {
        heading: 'Where RAG is the wrong tool',
        paragraphs: [
          'RAG is not a replacement for a transactional database. If the question asks for an exact balance, inventory count, eligibility status, or current order state, query the system of record.',
          'It is also not sufficient for actions requiring authorization or deterministic rules. A model may explain an approval policy, but the workflow engine should enforce it.',
        ],
      },
      {
        heading: 'Why naive RAG disappoints',
        paragraphs: [
          'A quick demo often splits documents every fixed number of characters and sends the nearest passages to a model. That can work until real users ask ambiguous questions, documents conflict, tables are involved, or permissions differ.',
          'Common failures include poor conversion, fragments without context, stale indexes, missing metadata, weak ranking, and prompts that allow the model to fill gaps from general knowledge.',
        ],
      },
      {
        heading: 'Design for authority and freshness',
        paragraphs: [
          'Not every document should have equal weight. A current approved policy should outrank an old draft. Metadata should capture source, owner, effective date, version, document type, and approval status.',
          'Permissions must be applied before evidence reaches the model. Filtering the final answer is too late if unauthorized content was already retrieved or logged.',
        ],
      },
    ],
    conclusion: [
      'RAG is governed retrieval plus language synthesis. It helps people navigate organizational knowledge, but it does not eliminate the need for source quality, permissions, citations, workflow rules, or human judgment.',
      'Use RAG when answers live in text and evidence matters. Use databases and APIs when exact current facts matter.',
    ],
  },
  {
    slug: 'building-ai-safely',
    title: 'Building AI Safely: Guardrails That Work in Production',
    description: 'Concrete controls for data, permissions, validation, human review, monitoring, and incident response.',
    category: 'Governance',
    publishedAt: '2026-07-17',
    readTime: '8 min read',
    introduction: [
      'An AI application becomes risky when it is given sensitive information, authority, or reach without matching controls. The model may produce the visible output, but safety is primarily a property of the surrounding system.',
      'Production guardrails are not one moderation filter. They are layered controls that limit exposure, restrict actions, validate results, preserve accountability, and provide a safe path when the system is uncertain.',
    ],
    sections: [
      {
        heading: 'Begin with the consequence of failure',
        paragraphs: [
          'Risk should be based on what can happen when the system is wrong, unavailable, manipulated, or exposed. An internal brainstorming assistant and an automated eligibility tool should not share the same controls merely because both use a language model.',
          'Classify each use case by data sensitivity, decision impact, user population, external exposure, reversibility, and availability requirements.',
        ],
      },
      {
        heading: 'Minimize and compartmentalize data',
        paragraphs: [
          'Do not provide every field simply because the application can access it. Select the minimum information required, mask identifiers when possible, and separate workloads with different sensitivity levels.',
          'Prompts and responses can contain the same sensitive data as source systems. Logging must support investigation without creating a second uncontrolled repository.',
        ],
      },
      {
        heading: 'Enforce permissions outside the model',
        paragraphs: [
          'A model should never decide whether a user may view a document, approve a payment, change a record, or trigger an external action. Identity, authorization, and policy enforcement belong in deterministic services.',
          'Expose narrow tools with explicit inputs and server-side validation rather than broad database or administrative access.',
        ],
      },
      {
        heading: 'Constrain and validate outputs',
        paragraphs: [
          'When software consumes a response, require a defined schema and validate it. Reject unknown fields, impossible values, unsupported citations, and instructions that violate workflow state.',
          'For user-facing answers, display sources, distinguish generated content from verified facts, and make uncertainty visible.',
        ],
      },
      {
        heading: 'Make human review operational',
        paragraphs: [
          'Effective review requires a queue, enough context to decide, an audit trail, escalation rules, and feedback that improves the system.',
          'Focus review on exceptions, high-impact cases, low-confidence results, and policy-defined samples rather than forcing a person to reread every output.',
        ],
      },
      {
        heading: 'Prepare for misuse and failure',
        paragraphs: [
          'Test malicious documents, conflicting instructions, unsupported requests, data-exfiltration attempts, and tool misuse. Assume external content may contain instructions designed to manipulate the model.',
          'Operational safety also requires rate limits, timeouts, circuit breakers, fallbacks, version control, rollback plans, and clear incident ownership.',
        ],
      },
    ],
    conclusion: [
      'Safe AI is disciplined engineering applied to a probabilistic component. Data controls, permissions, validation, review, testing, observability, and incident response do most of the heavy lifting.',
      'The model should be powerful inside a narrow role. The application should remain the authority for access, state, rules, and action.',
    ],
  },
  {
    slug: 'from-ai-experiment-to-production-system',
    title: 'From AI Experiment to Production System',
    description: 'A practical roadmap for moving an AI proof of concept into a reliable, governed, measurable production capability.',
    category: 'Delivery',
    publishedAt: '2026-07-17',
    readTime: '9 min read',
    introduction: [
      'An AI proof of concept can be assembled in days. A production system must survive real data, real users, changing models, security review, operational failures, and the question of whether it actually improves the business process.',
      'The distance between demo and production is usually created by missing requirements, integration, evaluation, governance, ownership, and operational design, not by a lack of clever prompts.',
    ],
    sections: [
      {
        heading: 'Define the business outcome first',
        paragraphs: [
          'Identify who performs the work today, what inputs they use, where time or quality is lost, what an acceptable result looks like, and how exceptions are handled.',
          'Avoid goals such as deploy a chatbot. Better goals include reducing review time, lowering rework, improving access to approved procedures, or shortening case handling.',
        ],
      },
      {
        heading: 'Map the complete workflow',
        paragraphs: [
          'The model usually handles only part of the process. Production design must account for identity, source systems, data preparation, workflow state, notifications, approvals, error handling, retention, and downstream actions.',
          'A workflow map reveals which steps need reasoning and which should remain deterministic.',
        ],
      },
      {
        heading: 'Build an evaluation set early',
        paragraphs: [
          'Collect representative examples from the real process, including routine cases, ambiguous cases, edge cases, poor-quality inputs, conflicting sources, and requests the system should refuse.',
          'Define success for each example: correct fields, source citations, acceptable summaries, proper routing, policy compliance, or a correct decision to seek human review.',
        ],
      },
      {
        heading: 'Choose architecture from constraints',
        paragraphs: [
          'Model and platform selection should follow requirements for sensitivity, response time, volume, capability, integration, residency, and operating responsibility.',
          'Keep model access behind a service or gateway so authentication, routing, logging, limits, prompt versions, and fallbacks are centralized.',
        ],
      },
      {
        heading: 'Engineer the failure paths',
        paragraphs: [
          'Production inputs will be missing, malformed, oversized, stale, or unauthorized. Model calls will time out. Structured output will fail validation. Retrieval will sometimes return weak evidence.',
          'Define what the system does in each case. Retry selectively, preserve state, provide useful errors, escalate when appropriate, and avoid inventing a result merely to keep the interface smooth.',
        ],
      },
      {
        heading: 'Pilot with ownership and metrics',
        paragraphs: [
          'A pilot should use real users and realistic conditions while limiting scope and consequence. Name the person responsible for support, the business owner who accepts outcomes, and the team that can change or disable the system.',
          'Measure adoption, completion, quality, review effort, latency, cost, and exception rates. Enthusiasm is useful feedback, but it is not a production metric by itself.',
        ],
      },
      {
        heading: 'Release through controlled change',
        paragraphs: [
          'Prompts, retrieval settings, model versions, and source documents can all change behavior. Version them, test them, deploy gradually, and preserve a rollback path.',
          'After launch, treat failures and overrides as product data. Stable patterns can move into rules, retrieval can improve, and true exceptions can become clearer.',
        ],
      },
    ],
    conclusion: [
      'Moving from experiment to production converts possibility into responsibility. The winning system is not the most impressive demonstration. It is the one that completes useful work, protects the organization, and can be operated by a real team.',
      'Start with the workflow, measure outcomes, evaluate real cases, separate reasoning from deterministic control, design failure paths, and assign ownership.',
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
