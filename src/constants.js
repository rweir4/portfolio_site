export const CHATBOX_INFO = [
  {
    id: 'rag',
    icon: 'plumbing.png',
    title: 'Optimized RAG Pipeline',
    offset: false,
    tooltipContent: [
      '1000-char chunks with 200-char overlap for context preservation',
      'Retrieves top 5 chunks (~1500 tokens of context)',
      'Pinecone managed vector database',
      'LangChain orchestration framework',
      'OpenAI text-embedding-3-small (<$0.01 ingestion cost)',
      'Idempotent upsert with orphan cleanup for data consistency'
    ]
  },
  {
    id: 'stack',
    icon: 'algorithm.png',
    title: 'Production-Grade Stack',
    offset: true,
    tooltipContent: [
      'FastAPI + Python 3.11 backend framework',
      'Claude (Anthropic) as the LLM',
      'TypedDict for strong typing throughout codebase',
      'Singleton pattern with lazy initialization for RAG engine',
      'Atomic file writes with temp files for logger reliability',
      'Deployed on Railway for scalability'
    ]
  },
  {
    id: 'cost',
    icon: 'money.png',
    title: 'Smart Cost Management',
    offset: false,
    tooltipContent: [
      '$5 daily cap with auto-shutoff protection',
      '30 requests/hour global rate limiting',
      '~$0.01-0.02 per query average cost',
      'Claude pricing: $3/M input, $15/M output tokens',
      'API_ENABLED environment variable kill switch',
      'Max 4K output tokens per request for cost control'
    ]
  }
];