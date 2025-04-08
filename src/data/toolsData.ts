
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
  },
  {
    id: "31",
    name: "Kapwing",
    description: "Online video editor for creating, editing, and collaborating on videos, with AI-powered features.",
    category: "Video Generation",
    imageUrl: "https://www.kapwing.com/resources/content/images/2023/08/Frame-92013-1.png",
    url: "https://www.kapwing.com",
    pricing: "Freemium",
    tags: ["video editing", "collaboration", "content creation"]
  },
  {
    id: "32",
    name: "Veed.io",
    description: "Online video editor with AI tools for subtitles, transcription, and enhancing video content.",
    category: "Video Generation",
    imageUrl: "https://www.veed.io/static/media/logo-white.e8a4839d.svg",
    url: "https://www.veed.io",
    pricing: "Freemium",
    tags: ["video editing", "subtitles", "transcription"]
  },
  {
    id: "33",
    name: "Media.io",
    description: "Online multimedia platform with AI-powered tools for video, audio, and image editing.",
    category: "Video Generation",
    imageUrl: "https://www.media.io/imagesV4/logo/media-io-logo.svg",
    url: "https://www.media.io",
    pricing: "Freemium",
    tags: ["video editing", "audio editing", "converter"]
  },
  {
    id: "34",
    name: "Unscreen",
    description: "AI-powered tool to remove video backgrounds automatically without a green screen.",
    category: "Video Generation",
    imageUrl: "https://static.unscreen.com/images/logo.svg",
    url: "https://www.unscreen.com",
    pricing: "Freemium",
    tags: ["background removal", "video editing", "transparency"]
  },
  {
    id: "35",
    name: "InVideo",
    description: "Online video creation platform with templates and AI-powered features for marketing videos.",
    category: "Video Generation",
    imageUrl: "https://assets-global.website-files.com/5f66a9b93ffe9e4bfa4d1d13/5f6a71183edbcb7e2b59df0b_invideo-light-logo.svg",
    url: "https://invideo.io",
    pricing: "Freemium",
    tags: ["video creation", "templates", "marketing"]
  },
  {
    id: "36",
    name: "Keevi",
    description: "AI video editor for creating professional videos from text, presentations, and transcripts.",
    category: "Video Generation",
    imageUrl: "https://keevi.io/wp-content/uploads/2023/06/keevi-logo.svg",
    url: "https://keevi.io",
    pricing: "Paid",
    tags: ["video creation", "presentations", "text-to-video"]
  },
  {
    id: "37",
    name: "HeyGen",
    description: "AI video generation platform for creating professional videos with digital avatars.",
    category: "Video Generation",
    imageUrl: "https://assets-global.website-files.com/627bec733c6bb48a31be1f3e/6282f678fe4cf54e724ea343_HeyGen.svg",
    url: "https://www.heygen.com",
    pricing: "Paid",
    tags: ["avatars", "AI video", "digital humans"],
    featured: true
  },
  {
    id: "38",
    name: "Virbo",
    description: "AI-powered video language translator that changes the language in videos while preserving the original voice.",
    category: "Video Generation",
    imageUrl: "https://www.virbo.ai/logos/virbo-logo-light-beta.svg",
    url: "https://www.virbo.ai",
    pricing: "Paid",
    tags: ["language translation", "video dubbing", "localization"]
  },
  {
    id: "39",
    name: "Vizard",
    description: "AI-powered reel generator that creates engaging social media videos from your content.",
    category: "Video Generation",
    imageUrl: "https://vizard.ai/wp-content/uploads/2023/04/vizard-logo-1.svg",
    url: "https://vizard.ai",
    pricing: "Paid",
    tags: ["social media", "reels", "content creation"]
  },
  {
    id: "40",
    name: "Cutout.Pro",
    description: "AI-powered design platform with image and video editing tools including background removal.",
    category: "Image Generation",
    imageUrl: "https://www.cutout.pro/static/media/logo.88ce94ab.svg",
    url: "https://www.cutout.pro",
    pricing: "Freemium",
    tags: ["background removal", "design", "image editing"]
  },
  {
    id: "41",
    name: "Depositphotos",
    description: "Stock photo marketplace with AI search and editing tools for finding and customizing images.",
    category: "Image Generation",
    imageUrl: "https://static.depositphotos.com/storage/2022/08/Depositphotos-horizontal-color.svg",
    url: "https://depositphotos.com",
    pricing: "Paid",
    tags: ["stock photos", "images", "vectors"]
  },
  {
    id: "42",
    name: "Freepik",
    description: "Platform offering free vectors, stock photos, and PSD files with AI-powered search.",
    category: "Image Generation",
    imageUrl: "https://freepik.cdnpk.net/img/logos/freepik-logo.svg",
    url: "https://www.freepik.com",
    pricing: "Freemium",
    tags: ["vectors", "stock photos", "design resources"]
  },
  {
    id: "43",
    name: "Cleanup.pictures",
    description: "Free tool to remove unwanted objects, people, text, and defects from your images.",
    category: "Image Generation",
    imageUrl: "https://cleanup.pictures/images/logo.svg",
    url: "https://cleanup.pictures",
    pricing: "Freemium",
    tags: ["object removal", "image editing", "retouching"]
  },
  {
    id: "44",
    name: "Photopea",
    description: "Advanced online photo editor with AI features, similar to Adobe Photoshop.",
    category: "Image Generation",
    imageUrl: "https://www.photopea.com/promo/icon512.png",
    url: "https://www.photopea.com",
    pricing: "Freemium",
    tags: ["photo editing", "design", "photoshop alternative"]
  },
  {
    id: "45",
    name: "Wonder Dynamics",
    description: "Professional AI-powered graphics tool for creating high-quality visual effects.",
    category: "Image Generation",
    imageUrl: "https://wonderdynamics.com/images/wonder-logo.svg",
    url: "https://wonderdynamics.com",
    pricing: "Enterprise",
    tags: ["visual effects", "3D animation", "professional tools"]
  },
  {
    id: "46",
    name: "Watermark Remover",
    description: "AI-powered tool to remove watermarks from images while preserving quality.",
    category: "Image Generation",
    imageUrl: "https://www.watermarkremover.io/static/images/logo.webp",
    url: "https://www.watermarkremover.io",
    pricing: "Freemium",
    tags: ["watermark removal", "image cleaning", "restoration"]
  },
  {
    id: "47",
    name: "Let's Enhance",
    description: "AI image upscaler that increases resolution without quality loss.",
    category: "Image Generation",
    imageUrl: "https://letsenhance.io/static/icons/logo.svg",
    url: "https://letsenhance.io",
    pricing: "Freemium",
    tags: ["image enhancement", "upscaling", "resolution"]
  },
  {
    id: "48",
    name: "TensorPix",
    description: "AI tool for video upscaling and enhancing video quality using machine learning.",
    category: "Video Generation",
    imageUrl: "https://ui-avatars.com/api/?name=TensorPix&background=8B5CF6&color=fff",
    url: "https://tensorpix.ai",
    pricing: "Paid",
    tags: ["video enhancement", "upscaling", "AI processing"]
  },
  {
    id: "49",
    name: "Hotpot.ai",
    description: "AI tool for colorizing black and white images and enhancing photos.",
    category: "Image Generation",
    imageUrl: "https://hotpot.ai/images/site/hotpot-logo.svg",
    url: "https://hotpot.ai",
    pricing: "Freemium",
    tags: ["colorization", "image enhancement", "AI design"]
  },
  {
    id: "50",
    name: "Dictation.io",
    description: "Free online speech recognition tool that converts speech to text in real-time.",
    category: "Audio Tools",
    imageUrl: "https://dictation.io/img/logo.svg",
    url: "https://dictation.io",
    pricing: "Free",
    tags: ["speech-to-text", "transcription", "dictation"]
  },
  {
    id: "51",
    name: "Suno.ai",
    description: "AI music generation platform that creates original songs from text prompts.",
    category: "Audio Tools",
    imageUrl: "https://images.ctfassets.net/1e9i8wzmj0dx/6zTKD2bYzzAtGoQFdR5KbZ/b26b16ca035416ba404e8003d7940e6c/Suno-Logo.svg",
    url: "https://suno.ai",
    pricing: "Freemium",
    tags: ["music generation", "lyrics", "AI music"]
  },
  {
    id: "52",
    name: "Paper Cups",
    description: "AI tool for changing languages in videos while preserving the speaker's voice.",
    category: "Audio Tools",
    imageUrl: "https://ui-avatars.com/api/?name=Paper+Cups&background=8B5CF6&color=fff",
    url: "https://papercups.ai",
    pricing: "Paid",
    tags: ["language translation", "voice preservation", "video localization"]
  },
  {
    id: "53",
    name: "Podwise",
    description: "AI platform that generates summaries of podcasts to save listening time.",
    category: "Audio Tools",
    imageUrl: "https://podwise.xyz/logo.svg",
    url: "https://podwise.xyz",
    pricing: "Freemium",
    tags: ["podcast summaries", "audio summaries", "time-saving"]
  },
  {
    id: "54",
    name: "Bubble",
    description: "Visual programming platform for building web applications without coding.",
    category: "Development Tools",
    imageUrl: "https://assets-global.website-files.com/6047a9e35e5dc54ac86ddd90/63e679e9ded3a9113e9c7c5e_bubble-logo.svg",
    url: "https://bubble.io",
    pricing: "Freemium",
    tags: ["no-code", "app builder", "web development"],
    featured: true
  },
  {
    id: "55",
    name: "AppGyver",
    description: "No-code platform for building responsive web and mobile applications.",
    category: "Development Tools",
    imageUrl: "https://www.appgyver.com/hs-fs/hubfs/img/appgyver/logo-white.svg",
    url: "https://www.appgyver.com",
    pricing: "Freemium",
    tags: ["no-code", "app development", "responsive design"]
  },
  {
    id: "56",
    name: "Adalo",
    description: "No-code platform for building mobile apps and web applications.",
    category: "Development Tools",
    imageUrl: "https://assets-global.website-files.com/5d55f1425cb6b7a18b39a0b5/5f5a63f93bae141b8c5411a5_adalo-logo-color.svg",
    url: "https://www.adalo.com",
    pricing: "Freemium",
    tags: ["mobile apps", "no-code", "prototyping"]
  },
  {
    id: "57",
    name: "Draftbit",
    description: "Visual app building platform with React Native components and export options.",
    category: "Development Tools",
    imageUrl: "https://assets.draftbit.com/logos/logo-with-text-dark.svg",
    url: "https://draftbit.com",
    pricing: "Paid",
    tags: ["React Native", "mobile development", "visual builder"]
  },
  {
    id: "58",
    name: "FlutterFlow",
    description: "Visual development platform for building native mobile apps with Flutter.",
    category: "Development Tools",
    imageUrl: "https://assets-global.website-files.com/5f4f91ff0107a91fddbcd5a5/619a81557dd04f7b069da1cc_FF_Logo.svg",
    url: "https://flutterflow.io",
    pricing: "Paid",
    tags: ["Flutter", "mobile development", "visual editor"]
  },
  {
    id: "59",
    name: "Teleport HQ",
    description: "AI-powered platform for creating website templates and generating code.",
    category: "Development Tools",
    imageUrl: "https://teleporthq.io/static/teleporthq-logo-reversed-aa29e1a0e7abcc5ca7ac7b40e09fdd98.svg",
    url: "https://teleporthq.io",
    pricing: "Freemium",
    tags: ["website templates", "code generation", "prototyping"]
  },
  {
    id: "60",
    name: "Sketch to Code",
    description: "AI tool that converts hand-drawn sketches into functional HTML code.",
    category: "Development Tools",
    imageUrl: "https://ui-avatars.com/api/?name=Sketch+to+Code&background=8B5CF6&color=fff",
    url: "https://sketch2code.azurewebsites.net",
    pricing: "Free",
    tags: ["sketch conversion", "prototyping", "HTML generation"]
  },
  {
    id: "61",
    name: "Zyro",
    description: "AI-powered website builder with templates and business tools.",
    category: "Development Tools",
    imageUrl: "https://zyro.com/_nuxt/img/zyro-logo.d9786b1.svg",
    url: "https://zyro.com",
    pricing: "Paid",
    tags: ["website builder", "templates", "business tools"]
  },
  {
    id: "62",
    name: "Locofy",
    description: "Tool that converts designs from Figma and Adobe XD to production-ready code.",
    category: "Development Tools",
    imageUrl: "https://www.locofy.ai/assets/logoSVG.svg",
    url: "https://www.locofy.ai",
    pricing: "Freemium",
    tags: ["design to code", "Figma", "frontend development"]
  },
  {
    id: "63",
    name: "Uncover.ai",
    description: "AI-powered research tool that helps uncover insights from data and documents.",
    category: "Research Tools",
    imageUrl: "https://ui-avatars.com/api/?name=Uncover&background=8B5CF6&color=fff",
    url: "https://uncover.ai",
    pricing: "Paid",
    tags: ["research", "data insights", "document analysis"]
  },
  {
    id: "64",
    name: "Tickertape",
    description: "Financial research platform with AI-powered stock analysis and portfolio tools.",
    category: "Research Tools",
    imageUrl: "https://tickertape.in/images/logos/tickertape-logo.svg",
    url: "https://tickertape.in",
    pricing: "Freemium",
    tags: ["finance", "stocks", "investment research"]
  },
  // Add the remaining tools
  {
    id: "65",
    name: "Temp Mail",
    description: "Temporary email service for disposable email addresses.",
    category: "Productivity Tools",
    imageUrl: "https://ui-avatars.com/api/?name=Temp+Mail&background=8B5CF6&color=fff",
    url: "https://temp-mail.org",
    pricing: "Free",
    tags: ["email", "privacy", "temporary"]
  },
  {
    id: "66",
    name: "FileHippo",
    description: "Software download platform with a wide range of applications.",
    category: "Productivity Tools",
    imageUrl: "https://static.filehippo.net/assets/images/filehippo-logo.svg",
    url: "https://filehippo.com",
    pricing: "Free",
    tags: ["software", "downloads", "applications"]
  },
  {
    id: "67",
    name: "PizzaPizza",
    description: "Online pizza ordering service with AI-powered recommendations.",
    category: "Productivity Tools",
    imageUrl: "https://ui-avatars.com/api/?name=PizzaPizza&background=8B5CF6&color=fff",
    url: "https://www.pizzapizza.ca",
    pricing: "Paid",
    tags: ["food", "delivery", "ordering"]
  },
  {
    id: "68",
    name: "10015.IO",
    description: "Collection of free online tools for developers and designers.",
    category: "Development Tools",
    imageUrl: "https://ui-avatars.com/api/?name=10015.IO&background=8B5CF6&color=fff",
    url: "https://10015.io",
    pricing: "Free",
    tags: ["developer tools", "utilities", "online tools"]
  },
  {
    id: "69",
    name: "Speedwrite",
    description: "AI-powered writing tool that helps create content quickly.",
    category: "Text Generation",
    imageUrl: "https://ui-avatars.com/api/?name=Speedwrite&background=8B5CF6&color=fff",
    url: "https://speedwrite.com",
    pricing: "Freemium",
    tags: ["writing", "content generation", "AI writing"]
  },
  {
    id: "70",
    name: "Level.fyi",
    description: "Salary comparison platform for tech and finance industries.",
    category: "Research Tools",
    imageUrl: "https://www.levels.fyi/img/logo_v2.png",
    url: "https://www.levels.fyi",
    pricing: "Freemium",
    tags: ["salary", "career", "compensation"]
  },
  {
    id: "71",
    name: "Filecr",
    description: "Download portal for various software and digital resources.",
    category: "Productivity Tools",
    imageUrl: "https://ui-avatars.com/api/?name=Filecr&background=8B5CF6&color=fff",
    url: "https://filecr.com",
    pricing: "Free",
    tags: ["downloads", "software", "resources"]
  },
  {
    id: "72",
    name: "PDFDrive",
    description: "Search engine for PDF files and ebooks.",
    category: "Research Tools",
    imageUrl: "https://ui-avatars.com/api/?name=PDFDrive&background=8B5CF6&color=fff",
    url: "https://pdfdrive.com",
    pricing: "Free",
    tags: ["PDF", "books", "documents"]
  },
  {
    id: "73",
    name: "SmartSerial",
    description: "Tool for managing serial numbers and product activations.",
    category: "Productivity Tools",
    imageUrl: "https://ui-avatars.com/api/?name=SmartSerial&background=8B5CF6&color=fff",
    url: "https://smartserial.com",
    pricing: "Paid",
    tags: ["serial numbers", "activation", "license management"]
  },
  {
    id: "74",
    name: "Digital Defynd",
    description: "Platform for finding free and paid online courses.",
    category: "Research Tools",
    imageUrl: "https://ui-avatars.com/api/?name=Digital+Defynd&background=8B5CF6&color=fff",
    url: "https://digitaldefynd.com",
    pricing: "Free",
    tags: ["courses", "learning", "education"]
  },
  {
    id: "75",
    name: "Lumpysoft",
    description: "Collection of software utilities and tools.",
    category: "Productivity Tools",
    imageUrl: "https://ui-avatars.com/api/?name=Lumpysoft&background=8B5CF6&color=fff",
    url: "https://lumpysoft.com",
    pricing: "Free",
    tags: ["utilities", "software", "tools"]
  },
  {
    id: "76",
    name: "PDF Candy",
    description: "Free online PDF editor and converter with multiple tools.",
    category: "Productivity Tools",
    imageUrl: "https://pdfcandy.com/assets/img/PDFCandy_logo.svg",
    url: "https://pdfcandy.com",
    pricing: "Freemium",
    tags: ["PDF", "editing", "conversion"]
  },
  {
    id: "77",
    name: "Kickresume",
    description: "AI-powered resume builder and career platform.",
    category: "Productivity Tools",
    imageUrl: "https://www.kickresume.com/img/logo-blue.svg",
    url: "https://kickresume.com",
    pricing: "Freemium",
    tags: ["resume", "career", "job search"]
  },
  {
    id: "78",
    name: "Rytr.me",
    description: "AI writing assistant for creating professional emails and content.",
    category: "Text Generation",
    imageUrl: "https://rytr.me/images/logo.png",
    url: "https://rytr.me",
    pricing: "Freemium",
    tags: ["emails", "writing", "AI assistant"]
  },
  {
    id: "79",
    name: "TinyWow",
    description: "Collection of free online tools for file conversion and editing.",
    category: "Productivity Tools",
    imageUrl: "https://ui-avatars.com/api/?name=TinyWow&background=8B5CF6&color=fff",
    url: "https://tinywow.com",
    pricing: "Free",
    tags: ["file conversion", "editing", "utilities"]
  },
  {
    id: "80",
    name: "Axiom.ai",
    description: "Browser automation platform without coding.",
    category: "Productivity Tools",
    imageUrl: "https://axiom.ai/assets/img/logos/axiom-logo.svg",
    url: "https://axiom.ai",
    pricing: "Freemium",
    tags: ["automation", "browser", "workflow"]
  },
  {
    id: "81",
    name: "WolframAlpha",
    description: "Computational knowledge engine that answers factual queries.",
    category: "Research Tools",
    imageUrl: "https://www.wolframalpha.com/images/spikey.png",
    url: "https://www.wolframalpha.com",
    pricing: "Freemium",
    tags: ["computation", "knowledge", "information"]
  },
  {
    id: "82",
    name: "Colossyan",
    description: "AI video platform for creating videos with virtual presenters.",
    category: "Video Generation",
    imageUrl: "https://colossyan.com/wp-content/uploads/2022/02/Colossyan_logo_600_400_white.png",
    url: "https://colossyan.com",
    pricing: "Paid",
    tags: ["video creation", "virtual presenters", "AI video"]
  },
  {
    id: "83",
    name: "ToffeeShare",
    description: "Simple file sharing service without registration.",
    category: "Productivity Tools",
    imageUrl: "https://ui-avatars.com/api/?name=ToffeeShare&background=8B5CF6&color=fff",
    url: "https://toffeeshare.com",
    pricing: "Free",
    tags: ["file sharing", "transfer", "collaboration"]
  },
  {
    id: "84",
    name: "Sketch to Code",
    description: "AI tool that converts hand-drawn sketches into HTML code.",
    category: "Development Tools",
    imageUrl: "https://ui-avatars.com/api/?name=Sketch+to+Code&background=8B5CF6&color=fff",
    url: "https://sketch2code.azurewebsites.net",
    pricing: "Free",
    tags: ["design to code", "HTML", "prototyping"]
  },
  {
    id: "85",
    name: "Archive.ph",
    description: "Web page archiving service for reading articles without paywalls.",
    category: "Research Tools",
    imageUrl: "https://ui-avatars.com/api/?name=Archive.ph&background=8B5CF6&color=fff",
    url: "https://archive.ph",
    pricing: "Free",
    tags: ["archive", "articles", "reading"]
  },
  {
    id: "86",
    name: "Omni Calculator",
    description: "Platform with hundreds of specialized calculators for various fields.",
    category: "Research Tools",
    imageUrl: "https://www.omnicalculator.com/assets/images/logo.png",
    url: "https://www.omnicalculator.com",
    pricing: "Free",
    tags: ["calculators", "math", "utilities"]
  },
  {
    id: "87",
    name: "SMS24.me",
    description: "Temporary phone number service for SMS verification.",
    category: "Productivity Tools",
    imageUrl: "https://ui-avatars.com/api/?name=SMS24&background=8B5CF6&color=fff",
    url: "https://sms24.me",
    pricing: "Free",
    tags: ["SMS", "verification", "temporary phone"]
  },
  {
    id: "88",
    name: "Ninite",
    description: "Tool to install and update multiple programs at once.",
    category: "Productivity Tools",
    imageUrl: "https://ninite.com/static/logo-70.png",
    url: "https://ninite.com",
    pricing: "Freemium",
    tags: ["software installation", "updates", "batch installer"]
  },
  {
    id: "89",
    name: "Jenni AI",
    description: "AI writing assistant for academic and professional writing.",
    category: "Text Generation",
    imageUrl: "https://jenni.ai/images/jenni-logo.svg",
    url: "https://jenni.ai",
    pricing: "Paid",
    tags: ["academic writing", "research", "AI assistant"]
  },
  {
    id: "90",
    name: "QuillBot",
    description: "AI-powered writing tool for paraphrasing and improving text.",
    category: "Text Generation",
    imageUrl: "https://assets.quillbot.com/images/quillbot-logo-new.svg",
    url: "https://quillbot.com",
    pricing: "Freemium",
    tags: ["paraphrasing", "writing", "grammar"]
  },
  {
    id: "91",
    name: "Loom",
    description: "Screen recording tool for creating and sharing quick videos.",
    category: "Video Generation",
    imageUrl: "https://cdn.loom.com/assets/marketing-pages/svg/logo-full.svg",
    url: "https://www.loom.com",
    pricing: "Freemium",
    tags: ["screen recording", "video messaging", "collaboration"]
  },
  {
    id: "92",
    name: "Convertio",
    description: "Online file converter that supports over 300 file formats.",
    category: "Productivity Tools",
    imageUrl: "https://convertio.co/images/logo.svg",
    url: "https://convertio.co",
    pricing: "Freemium",
    tags: ["file conversion", "formats", "converter"]
  },
  {
    id: "93",
    name: "Pixels",
    description: "Free stock photos and videos for personal and commercial use.",
    category: "Image Generation",
    imageUrl: "https://ui-avatars.com/api/?name=Pixels&background=8B5CF6&color=fff",
    url: "https://www.pexels.com",
    pricing: "Free",
    tags: ["stock photos", "images", "videos"]
  },
  {
    id: "94",
    name: "PlaytestCloud",
    description: "User testing platform for mobile games.",
    category: "Research Tools",
    imageUrl: "https://www.playtestcloud.com/static/ptc-logo-white-0e741e513a6cb4f281aac0de47ed593c.svg",
    url: "https://www.playtestcloud.com",
    pricing: "Paid",
    tags: ["game testing", "user research", "feedback"]
  },
  {
    id: "95",
    name: "SayMineApp",
    description: "Tool to discover which companies have your personal data.",
    category: "Research Tools",
    imageUrl: "https://ui-avatars.com/api/?name=SayMine&background=8B5CF6&color=fff",
    url: "https://saymineapp.com",
    pricing: "Free",
    tags: ["privacy", "data protection", "personal data"]
  },
  {
    id: "96",
    name: "Remotive",
    description: "Remote job board for finding remote work opportunities.",
    category: "Job Search",
    imageUrl: "https://remotive.com/remotive_website_assets/static/src/img/logo.png",
    url: "https://remotive.com",
    pricing: "Free",
    tags: ["remote work", "jobs", "career"]
  },
  {
    id: "97",
    name: "Indeed",
    description: "Job search engine for finding employment opportunities worldwide.",
    category: "Job Search",
    imageUrl: "https://theme.zdassets.com/theme_assets/2155033/bc0b47d5d3a0fa3e600a3bfa36b2b422f9d98c51.png",
    url: "https://in.indeed.com",
    pricing: "Free",
    tags: ["jobs", "employment", "career"]
  },
  {
    id: "98",
    name: "Upwork",
    description: "Freelance marketplace connecting businesses with independent professionals.",
    category: "Job Search",
    imageUrl: "https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png",
    url: "https://upwork.com",
    pricing: "Freemium",
    tags: ["freelance", "gigs", "remote work"]
  },
  {
    id: "99",
    name: "RemoteGlobal",
    description: "Job board exclusively for remote positions worldwide.",
    category: "Job Search",
    imageUrl: "https://ui-avatars.com/api/?name=RemoteGlobal&background=8B5CF6&color=fff",
    url: "https://remoteglobal.com",
    pricing: "Free",
    tags: ["remote work", "global jobs", "international"]
  },
  {
    id: "100",
    name: "DevSnap",
    description: "Platform for discovering developer tools and resources.",
    category: "Development Tools",
    imageUrl: "https://ui-avatars.com/api/?name=DevSnap&background=8B5CF6&color=fff",
    url: "https://devsnap.io",
    pricing: "Free",
    tags: ["developer resources", "tools", "programming"]
  },
  {
    id: "101",
    name: "WorkingNomads",
    description: "Curated list of remote jobs for digital nomads.",
    category: "Job Search",
    imageUrl: "https://workingnomads.co/static/jobs/assets/logo.png",
    url: "https://workingnomads.co",
    pricing: "Free",
    tags: ["remote work", "digital nomad", "jobs"]
  },
  {
    id: "102",
    name: "Nodes",
    description: "Blockchain and cryptocurrency job platform.",
    category: "Job Search",
    imageUrl: "https://ui-avatars.com/api/?name=Nodes&background=8B5CF6&color=fff",
    url: "https://nodes.co",
    pricing: "Free",
    tags: ["blockchain", "crypto", "tech jobs"]
  },
  {
    id: "103",
    name: "DynamiteJobs",
    description: "Remote job board focused on high-quality positions.",
    category: "Job Search",
    imageUrl: "https://ui-avatars.com/api/?name=DynamiteJobs&background=8B5CF6&color=fff",
    url: "https://dynamitejobs.com",
    pricing: "Free",
    tags: ["remote work", "vetted jobs", "career"]
  },
  {
    id: "104",
    name: "RemoteHunt",
    description: "Curated list of remote jobs for experienced professionals.",
    category: "Job Search",
    imageUrl: "https://ui-avatars.com/api/?name=RemoteHunt&background=8B5CF6&color=fff",
    url: "https://remotehunt.com",
    pricing: "Free",
    tags: ["remote work", "senior jobs", "experienced"]
  },
  {
    id: "105",
    name: "Angel.co",
    description: "Platform connecting startups with job seekers and investors.",
    category: "Job Search",
    imageUrl: "https://angel.co/images/shared/peace_large.png",
    url: "https://angel.co",
    pricing: "Free",
    tags: ["startups", "investment", "jobs"]
  },
  {
    id: "106",
    name: "EpicJobs",
    description: "Job board focusing on remote tech and creative positions.",
    category: "Job Search",
    imageUrl: "https://ui-avatars.com/api/?name=EpicJobs&background=8B5CF6&color=fff",
    url: "https://epicjobs.co",
    pricing: "Free",
    tags: ["tech jobs", "creative", "remote work"]
  },
  {
    id: "107",
    name: "Remote.co",
    description: "Remote job board with resources for remote workers and companies.",
    category: "Job Search",
    imageUrl: "https://remote.co/wp-content/uploads/2022/04/remote-co-logo.svg",
    url: "https://remote.co",
    pricing: "Free",
    tags: ["remote jobs", "work from home", "distributed teams"]
  },
  {
    id: "108",
    name: "Workew",
    description: "Remote job board with a focus on quality listings.",
    category: "Job Search",
    imageUrl: "https://ui-avatars.com/api/?name=Workew&background=8B5CF6&color=fff",
    url: "https://workew.com",
    pricing: "Free",
    tags: ["remote work", "curated jobs", "employment"]
  },
  {
    id: "109",
    name: "WantRemote",
    description: "Remote job aggregator with filtering by category and location.",
    category: "Job Search",
    imageUrl: "https://ui-avatars.com/api/?name=WantRemote&background=8B5CF6&color=fff",
    url: "https://wantremote.com",
    pricing: "Free",
    tags: ["remote work", "job search", "categories"]
  },
  {
    id: "110",
    name: "Remoters.net",
    description: "Remote work hub with jobs, tools, and resources.",
    category: "Job Search",
    imageUrl: "https://remoters.net/wp-content/themes/remoters/assets/img/remoters-logo.png",
    url: "https://remoters.net",
    pricing: "Free",
    tags: ["remote work", "digital nomad", "resources"]
  },
  {
    id: "111",
    name: "WeWorkRemotely",
    description: "Remote job board for software, design, and non-tech positions.",
    category: "Job Search",
    imageUrl: "https://we-work-remotely.imgix.net/logos/0001/5395/logo.gif",
    url: "https://weworkremotely.com",
    pricing: "Free",
    tags: ["remote jobs", "tech", "non-tech"]
  },
  {
    id: "112",
    name: "JobBoardSearch",
    description: "Search engine for finding job boards by industry and location.",
    category: "Job Search",
    imageUrl: "https://ui-avatars.com/api/?name=JobBoardSearch&background=8B5CF6&color=fff",
    url: "https://jobboardsearch.com",
    pricing: "Free",
    tags: ["job boards", "search engine", "career"]
  },
  {
    id: "113",
    name: "JSRemotely",
    description: "Job board specializing in remote JavaScript positions.",
    category: "Job Search",
    imageUrl: "https://ui-avatars.com/api/?name=JSRemotely&background=8B5CF6&color=fff",
    url: "https://jsremotely.com",
    pricing: "Free",
    tags: ["JavaScript", "programming", "remote jobs"]
  },
  {
    id: "114",
    name: "Remote4me",
    description: "Job aggregator for tech and non-tech remote positions.",
    category: "Job Search",
    imageUrl: "https://ui-avatars.com/api/?name=Remote4me&background=8B5CF6&color=fff",
    url: "https://remote4me.com",
    pricing: "Free",
    tags: ["remote work", "tech jobs", "aggregator"]
  },
  {
    id: "115",
    name: "Netlify",
    description: "Web development platform for deploying and hosting websites.",
    category: "Development Tools",
    imageUrl: "https://www.netlify.com/img/press/logos/logomark.png",
    url: "https://netlify.app",
    pricing: "Freemium",
    tags: ["web hosting", "deployment", "frontend"]
  },
  {
    id: "116",
    name: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases.",
    category: "Productivity Tools",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    url: "https://www.notion.so",
    pricing: "Freemium",
    tags: ["productivity", "notes", "collaboration"]
  }
];

export default toolsData;
