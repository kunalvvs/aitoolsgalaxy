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
  {
