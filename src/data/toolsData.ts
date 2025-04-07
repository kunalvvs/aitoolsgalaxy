
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
    imageUrl: "https://seeklogo.com/images/M/midjourney-logo-03CAEEF92A-seeklogo.com.png",
    url: "https://www.midjourney.com",
    pricing: "Paid",
    tags: ["image", "art", "design", "creative"]
  },
  {
    id: "4",
    name: "Jasper",
    description: "AI writing assistant that helps create marketing copy, blog posts, and other content.",
    category: "Text Generation",
    imageUrl: "https://uploads-ssl.webflow.com/5e402995d6da914135fccc5d/62b1d31789c0bc677c48cd50_jasper-logo.svg",
    url: "https://www.jasper.ai",
    pricing: "Paid",
    tags: ["copywriting", "marketing", "content"]
  },
  {
    id: "5",
    name: "Copy.ai",
    description: "Create marketing copy, emails, and social media content using AI.",
    category: "Text Generation",
    imageUrl: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_7907c1b78a980f016e2a76571e15b954/copy-ai.png",
    url: "https://www.copy.ai",
    pricing: "Freemium",
    tags: ["copywriting", "marketing", "emails"]
  },
  {
    id: "6",
    name: "RunwayML",
    description: "Create, edit, and enhance videos with AI-powered tools.",
    category: "Video Generation",
    imageUrl: "https://runwayml.com/images/logo/logo-run-way-ml.svg",
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
    imageUrl: "https://cdn.synthesia.io/images/synthesia/og-default-1200x630.png",
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
    imageUrl: "https://assets-global.website-files.com/64a3cbb54ae2ec5e94ce6ebd/65016e507ca6c9291d8d9152_New%20Logo%20512_512.png",
    url: "https://www.perplexity.ai",
    pricing: "Freemium",
    tags: ["search", "research", "answers"]
  },
  {
    id: "10",
    name: "Anthropic Claude",
    description: "Conversational AI assistant designed to be helpful, harmless, and honest.",
    category: "Text Generation",
    imageUrl: "https://cdn.icon-icons.com/icons2/3869/PNG/512/anthropic_claude_logo_icon_246696.png",
    url: "https://www.anthropic.com/claude",
    pricing: "Freemium",
    tags: ["conversation", "assistant", "safety"]
  },
  {
    id: "11",
    name: "Stable Diffusion",
    description: "Open-source image generation model creating detailed images from text descriptions.",
    category: "Image Generation",
    imageUrl: "https://yt3.googleusercontent.com/n6YWkQjte7UTy1Gf_BEDI6IrKQ1SJRqxQwRTlrYnBD2cOGaYzYbLBnJSqKiLLGUwRIB1TPPXBw=s900-c-k-c0x00ffffff-no-rj",
    url: "https://stability.ai",
    pricing: "Open Source",
    tags: ["image", "generative", "open source"]
  },
  {
    id: "12",
    name: "Krisp",
    description: "AI-powered noise cancellation for calls and meetings.",
    category: "Audio Tools",
    imageUrl: "https://cdn.krisp.ai/k-logo-1.svg",
    url: "https://krisp.ai",
    pricing: "Freemium",
    tags: ["noise cancellation", "meetings", "voice"]
  },
  {
    id: "13",
    name: "Grammarly",
    description: "AI writing assistant that checks grammar, spelling, and writing style.",
    category: "Text Generation",
    imageUrl: "https://static.grammarly.com/assets/files/5ee1747682d7e997ee744032aec6b634/grammarly-logo-new.svg",
    url: "https://www.grammarly.com",
    pricing: "Freemium",
    tags: ["writing", "grammar", "proofreading"]
  },
  {
    id: "14",
    name: "Otter.ai",
    description: "Real-time transcription and note-taking for meetings and lectures.",
    category: "Audio Tools",
    imageUrl: "https://assets-global.website-files.com/618e9316785b3582a5178502/6193f1e45aa23863cdc224a2_otter-logo.svg",
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
    imageUrl: "https://replicate.com/static/logo-white.svg",
    url: "https://replicate.com",
    pricing: "Paid",
    tags: ["cloud", "machine learning", "deployment"]
  },
  {
    id: "16",
    name: "LangChain",
    description: "Framework for developing applications powered by language models.",
    category: "Development Tools",
    imageUrl: "https://avatars.githubusercontent.com/u/126733545?s=280&v=4",
    url: "https://langchain.com",
    pricing: "Open Source",
    tags: ["development", "LLMs", "framework"]
  },
  {
    id: "17",
    name: "ElevenLabs",
    description: "AI voice generator with realistic, emotion-rich speech synthesis.",
    category: "Audio Tools",
    imageUrl: "https://global-uploads.webflow.com/63933dacad9b0664a25a4521/63bef845a11b8864e3649064_LogoEleven.svg",
    url: "https://elevenlabs.io",
    pricing: "Freemium",
    tags: ["voice", "speech", "synthesis"]
  },
  {
    id: "18",
    name: "Notion AI",
    description: "AI writing assistant integrated within the Notion workspace.",
    category: "Productivity Tools",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    url: "https://www.notion.so/ai",
    pricing: "Paid",
    tags: ["writing", "productivity", "workspace"]
  },
  {
    id: "19",
    name: "Coda AI",
    description: "AI-powered doc editor that can draft, edit, and analyze content.",
    category: "Productivity Tools",
    imageUrl: "https://cdn.coda.io/icons/png/color/coda-logo.png",
    url: "https://coda.io",
    pricing: "Freemium",
    tags: ["documents", "collaboration", "analysis"]
  },
  {
    id: "20",
    name: "Roam Research",
    description: "Note-taking tool for networked thought with AI integration.",
    category: "Productivity Tools",
    imageUrl: "https://roamresearch.com/assets/logo.png",
    url: "https://roamresearch.com",
    pricing: "Paid",
    tags: ["notes", "knowledge", "connections"]
  },
  {
    id: "21",
    name: "GitHub Copilot",
    description: "AI pair programmer that suggests code completions based on context.",
    category: "Development Tools",
    imageUrl: "https://github.gallerycdn.vsassets.io/extensions/github/copilot/1.100.206/1677087367482/Microsoft.VisualStudio.Services.Icons.Default",
    url: "https://github.com/features/copilot",
    pricing: "Paid",
    tags: ["coding", "programming", "AI assistant", "GitHub"],
    featured: true
  },
  {
    id: "22",
    name: "Adobe Firefly",
    description: "Family of creative generative AI tools for creating images, texts, and designs.",
    category: "Image Generation",
    imageUrl: "https://www.adobe.com/content/dam/cc/icons/firefly.svg",
    url: "https://www.adobe.com/products/firefly.html",
    pricing: "Freemium",
    tags: ["design", "creative", "Adobe", "generative"],
  },
  {
    id: "23",
    name: "Gemini",
    description: "Google's most capable AI model for text, code, images, and reasoning.",
    category: "Text Generation",
    imageUrl: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini_cloud_next_2023_multiturn_conversation.width-1000.format-webp.webp",
    url: "https://gemini.google.com",
    pricing: "Freemium",
    tags: ["language model", "multimodal", "Google", "AI assistant"],
    featured: true
  },
  {
    id: "24",
    name: "Descript",
    description: "All-in-one video and audio editing software with AI transcription and voice cloning.",
    category: "Video Generation",
    imageUrl: "https://assets-global.website-files.com/5d99082d9ea72d78f15b2b6f/60bf67e0276d5bd2aafb8ce7_Descript%20-%20Logo.svg",
    url: "https://www.descript.com",
    pricing: "Freemium",
    tags: ["video editing", "audio editing", "transcription", "podcasting"]
  },
  {
    id: "25",
    name: "Typeface",
    description: "AI-powered content creation platform for enterprise marketing teams.",
    category: "Marketing Tools",
    imageUrl: "https://images.typeface.ai/typeface-logo-for-light-bg.svg",
    url: "https://typeface.ai",
    pricing: "Enterprise",
    tags: ["marketing", "content creation", "brand"]
  },
  {
    id: "26",
    name: "Bard",
    description: "Google's experimental, collaborative AI service powered by LaMDA.",
    category: "Text Generation",
    imageUrl: "https://lh3.googleusercontent.com/tS5l9YK-64E-dz2o0J8gyaiz4Jcj0mT8bgojMaJ9DW19_lnum2P7y10iJ5lmKQTGLhzjbi9Rq40NezW95mNbVHl_QK_VS36gLQ=w0",
    url: "https://bard.google.com",
    pricing: "Free",
    tags: ["conversation", "information", "Google"]
  },
  {
    id: "27",
    name: "Runway Gen-2",
    description: "Advanced text-to-video AI model for creating realistic videos from prompts.",
    category: "Video Generation",
    imageUrl: "https://images.ctfassets.net/6x37yn69jngl/2lSVvRcQBG9Q12159TGF9I/810a611d8c4ea960380c0a20b474c280/runway_icon_dark-bg.png",
    url: "https://research.runwayml.com/gen2",
    pricing: "Paid",
    tags: ["video generation", "AI video", "motion"]
  },
  {
    id: "28",
    name: "Gamma",
    description: "AI-powered presentation and document creation tool.",
    category: "Productivity Tools",
    imageUrl: "https://assets-global.website-files.com/6127a84dfe068e153ef20572/613b34ce7e79ec66ab3413e1_Gamma%20Logo.svg",
    url: "https://gamma.app",
    pricing: "Freemium",
    tags: ["presentations", "slides", "documents"]
  },
  {
    id: "29",
    name: "Beautiful.ai",
    description: "AI presentation software that designs slides for you.",
    category: "Productivity Tools",
    imageUrl: "https://www.beautiful.ai/images/logo-word.svg",
    url: "https://www.beautiful.ai",
    pricing: "Freemium",
    tags: ["presentations", "design", "slides"]
  },
  {
    id: "30",
    name: "Murf AI",
    description: "AI voice generator that creates studio-quality voiceovers.",
    category: "Audio Tools",
    imageUrl: "https://murf.ai/resources/images/murf-logo-new.svg",
    url: "https://murf.ai",
    pricing: "Freemium",
    tags: ["voice", "speech", "voiceover"]
  }
];

export default toolsData;
