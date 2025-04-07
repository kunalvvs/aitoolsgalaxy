
import { ToolData } from '../components/ToolCard';

const toolsData: ToolData[] = [
  {
    id: "1",
    name: "ChatGPT",
    description: "Advanced language model that can generate human-like text responses based on context and past conversations.",
    category: "Text Generation",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    url: "https://chat.openai.com",
    pricing: "Freemium",
    tags: ["language model", "conversation", "OpenAI", "GPT"],
    featured: true
  },
  {
    id: "2", 
    name: "DALL-E 3",
    description: "Create realistic images and art from natural language descriptions.",
    category: "Image Generation",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/28/DALL-E_Logo.svg",
    url: "https://openai.com/dall-e-3",
    pricing: "Paid",
    tags: ["image", "art", "OpenAI", "generative"]
  },
  {
    id: "3",
    name: "Midjourney",
    description: "AI text-to-image tool that creates stunning, artistic visuals from textual prompts.",
    category: "Image Generation",
    url: "https://www.midjourney.com",
    pricing: "Paid",
    tags: ["image", "art", "design", "creative"]
  },
  {
    id: "4",
    name: "Jasper",
    description: "AI writing assistant that helps create marketing copy, blog posts, and other content.",
    category: "Text Generation",
    url: "https://www.jasper.ai",
    pricing: "Paid",
    tags: ["copywriting", "marketing", "content"]
  },
  {
    id: "5",
    name: "Copy.ai",
    description: "Create marketing copy, emails, and social media content using AI.",
    category: "Text Generation",
    url: "https://www.copy.ai",
    pricing: "Freemium",
    tags: ["copywriting", "marketing", "emails"]
  },
  {
    id: "6",
    name: "RunwayML",
    description: "Create, edit, and enhance videos with AI-powered tools.",
    category: "Video Generation",
    url: "https://runwayml.com",
    pricing: "Freemium",
    tags: ["video", "editing", "creative"],
    featured: true
  },
  {
    id: "7",
    name: "Synthesia",
    description: "Create AI videos with virtual presenters speaking from text.",
    category: "Video Generation",
    url: "https://www.synthesia.io",
    pricing: "Paid",
    tags: ["video", "avatars", "presenters"]
  },
  {
    id: "8",
    name: "Hugging Face",
    description: "Community and platform to build, train, and deploy ML models.",
    category: "Development Tools",
    imageUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    url: "https://huggingface.co",
    pricing: "Freemium",
    tags: ["machine learning", "models", "community", "open source"]
  },
  {
    id: "9",
    name: "Perplexity AI",
    description: "AI-powered search engine that provides concise answers with citations.",
    category: "Research Tools",
    url: "https://www.perplexity.ai",
    pricing: "Freemium",
    tags: ["search", "research", "answers"]
  },
  {
    id: "10",
    name: "Anthropic Claude",
    description: "Conversational AI assistant designed to be helpful, harmless, and honest.",
    category: "Text Generation",
    url: "https://www.anthropic.com/claude",
    pricing: "Freemium",
    tags: ["conversation", "assistant", "safety"]
  },
  {
    id: "11",
    name: "Stable Diffusion",
    description: "Open-source image generation model creating detailed images from text descriptions.",
    category: "Image Generation",
    url: "https://stability.ai",
    pricing: "Open Source",
    tags: ["image", "generative", "open source"]
  },
  {
    id: "12",
    name: "Krisp",
    description: "AI-powered noise cancellation for calls and meetings.",
    category: "Audio Tools",
    url: "https://krisp.ai",
    pricing: "Freemium",
    tags: ["noise cancellation", "meetings", "voice"]
  },
  {
    id: "13",
    name: "Grammarly",
    description: "AI writing assistant that checks grammar, spelling, and writing style.",
    category: "Text Generation",
    url: "https://www.grammarly.com",
    pricing: "Freemium",
    tags: ["writing", "grammar", "proofreading"]
  },
  {
    id: "14",
    name: "Otter.ai",
    description: "Real-time transcription and note-taking for meetings and lectures.",
    category: "Audio Tools",
    url: "https://otter.ai",
    pricing: "Freemium",
    tags: ["transcription", "meetings", "notes"],
    featured: true
  },
  {
    id: "15",
    name: "Replicate",
    description: "Platform to run machine learning models in the cloud.",
    category: "Development Tools",
    url: "https://replicate.com",
    pricing: "Paid",
    tags: ["cloud", "machine learning", "deployment"]
  },
  {
    id: "16",
    name: "LangChain",
    description: "Framework for developing applications powered by language models.",
    category: "Development Tools",
    url: "https://langchain.com",
    pricing: "Open Source",
    tags: ["development", "LLMs", "framework"]
  },
  {
    id: "17",
    name: "ElevenLabs",
    description: "AI voice generator with realistic, emotion-rich speech synthesis.",
    category: "Audio Tools",
    url: "https://elevenlabs.io",
    pricing: "Freemium",
    tags: ["voice", "speech", "synthesis"]
  },
  {
    id: "18",
    name: "Notion AI",
    description: "AI writing assistant integrated within the Notion workspace.",
    category: "Productivity Tools",
    url: "https://www.notion.so/ai",
    pricing: "Paid",
    tags: ["writing", "productivity", "workspace"]
  },
  {
    id: "19",
    name: "Coda AI",
    description: "AI-powered doc editor that can draft, edit, and analyze content.",
    category: "Productivity Tools",
    url: "https://coda.io",
    pricing: "Freemium",
    tags: ["documents", "collaboration", "analysis"]
  },
  {
    id: "20",
    name: "Roam Research",
    description: "Note-taking tool for networked thought with AI integration.",
    category: "Productivity Tools",
    url: "https://roamresearch.com",
    pricing: "Paid",
    tags: ["notes", "knowledge", "connections"]
  }
];

export default toolsData;
