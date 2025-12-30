import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) throw new Error("no api key assigned");

const genAi = new GoogleGenerativeAI(apiKey);

const ai = genAi.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: { responseMimeType: "application/json" },
});

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

const AI = {
  prompt: async (prompt: string, retry = 5) => {
    try {
      const res = await ai.generateContent(prompt);
      const data = JSON.parse(res.response.text());
      return data;
    } catch (e) {
      if (e.status === 429 && retry > 0) {
        console.warn(e);
        await wait(40000);
        return AI.prompt(prompt, retry - 1);
      }
    }
  },
};

export default AI;
