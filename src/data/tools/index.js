import { textGenerationTools } from './textGenerationTools';
import { imageGenerationTools } from './imageGenerationTools';
import { videoGenerationTools } from './videoGenerationTools';
import { audioTools } from './audioTools';
import { developmentTools } from './developmentTools';
import { productivityTools } from './productivityTools';
import { researchTools } from './researchTools';
import { marketingTools } from './marketingTools';
import { jobSearchTools } from './jobSearchTools';
// Combine all tools from different categories
const toolsData = [...textGenerationTools, ...imageGenerationTools, ...videoGenerationTools, ...audioTools, ...developmentTools, ...productivityTools, ...researchTools, ...marketingTools, ...jobSearchTools];
export default toolsData;
