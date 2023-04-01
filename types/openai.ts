export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5_TURBO = 'gpt-3.5-turbo',
  GPT_3_5_TURBO_0301 = 'gpt-3.5-turbo-0301',
  TEXT_DAVINCI_003 = 'text-davinci-003',
  TEXT_DAVINCI_002 = 'text-davinci-002',
  CODE_DAVINCI_002 = 'code-davinci-002',
  GPT_4 = 'gpt-4',
  GPT_4_0314 = 'gpt-4-0314',
  GPT_4_32K = 'gpt-4-32k',
  GPT_4_32K_0314 = 'gpt-4-32k-0314',
}
// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5_TURBO]: {
    id: OpenAIModelID.GPT_3_5_TURBO,
    name: 'GPT-3.5 Turbo',
    maxLength: 12000
    tokenLimit: 4096,
  },
  [OpenAIModelID.GPT_3_5_TURBO_0301]: {
    id: OpenAIModelID.GPT_3_5_TURBO_0301,
    name: 'GPT-3.5 Turbo 0301',
    maxLength: 4096,
    tokenLimit: 4096,
  },
  [OpenAIModelID.TEXT_DAVINCI_003]: {
    id: OpenAIModelID.TEXT_DAVINCI_003,
    name: 'Text Davinci 003',
    maxLength: 4097,
    tokenLimit: 4097,
  },
  [OpenAIModelID.TEXT_DAVINCI_002]: {
    id: OpenAIModelID.TEXT_DAVINCI_002,
    name: 'Text Davinci 002',
    maxLength: 4097,
    tokenLimit: 4097,
  },
  [OpenAIModelID.CODE_DAVINCI_002]: {
    id: OpenAIModelID.CODE_DAVINCI_002,
    name: 'Code Davinci 002',
    maxLength: 8001,
    tokenLimit: 8001,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_0314]: {
    id: OpenAIModelID.GPT_4_0314,
    name: 'GPT-4 0314',
    maxLength: 8192,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4 32K',
    maxLength: 32768,
    tokenLimit: 32768,
  },
  [OpenAIModelID.GPT_4_32K_0314]: {
    id: OpenAIModelID.GPT_4_32K_0314,
    name: 'GPT-4 32K 0314',
    maxLength: 32768,
    tokenLimit: 32768,
  },
};
