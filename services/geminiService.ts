
import { GoogleGenAI } from "@google/genai";
import { FormData } from '../types';

const buildPrompt = (formData: FormData): string => {
  return `
你是一位专业的中文文学专家和高级撰稿人。你的任务是根据用户提供的特定情境和要求，生成最合适、最得体、最具文化韵味的中文祝福语（祝词）、祝贺词（贺词）或日常问候语（问候词）。

核心生成要求:
1.  文化得体性: 确保所有生成的文本都符合中国文化习俗，特别是对于正式场合（如婚礼、开业、春节），必须庄重、吉利、语意吉祥，避免不当用语。
2.  风格一致性: 严格遵循用户指定的“风格”要求（正式、轻松、幽默、诗意等），语气必须到位。
3.  精准匹配: 文本内容必须精准匹配“类型”、“场合”和“对象”的要求，言之有物，不能空泛。
4.  内容提炼: 如果是贺词/祝词，应提炼出核心信息，结构清晰（例如，开头恭维，主体祝愿，结尾总结）。
5.  输出格式: 仅输出最终生成的中文文本内容，不包含任何解释、分析、标题或额外的对话。

请根据以下信息生成内容：
- 类型: ${formData.type}
- 场合: ${formData.occasion}
- 对象: ${formData.relationship}
- 风格: ${formData.style}
- 长度: ${formData.length}
- 特定要求: ${formData.specificRequest || '无'}
`;
};

export const generateText = async (formData: FormData): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API key is not configured.");
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = buildPrompt(formData);
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
    });

    const text = response.text;
    if (!text) {
        throw new Error("未能生成文本，请调整您的输入后重试。");
    }

    return text.trim();
  } catch (error) {
    console.error("Error generating text with Gemini API:", error);
    throw new Error("与 AI 服务通信失败。请检查您的网络连接或 API 密钥。");
  }
};
