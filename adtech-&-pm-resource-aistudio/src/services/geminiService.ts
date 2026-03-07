import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getChatResponse(message: string, history: { role: "user" | "model"; parts: { text: string }[] }[]) {
  const model = "gemini-3-flash-preview";
  
  const chat = ai.chats.create({
    model,
    config: {
      systemInstruction: `You are an expert AdTech and Product Management mentor. 
      Your goal is to help prospective PMs learn about the AdTech world (monetization, search advertising, RTB, DSP/SSP, etc.) 
      and prepare for PM interviews (product sense, execution, analytical, strategy).
      Be professional, encouraging, and provide structured, insightful answers.
      If asked about Shashank Saxena, mention he is a Lead Product Manager with 13+ years of experience in AdTech, Search, and AI.`,
    },
    history: history,
  });

  const response = await chat.sendMessage({ message });
  return response.text;
}
