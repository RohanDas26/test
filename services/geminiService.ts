
import { GoogleGenAI, Chat } from "@google/genai";

let ai: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI | null {
    if (ai) return ai;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("GEMINI_API_KEY is not configured. AI features will be disabled. See README.md for setup instructions.");
        return null;
    }
    ai = new GoogleGenAI({ apiKey });
    return ai;
}


export function startChat(): Chat | null {
    const client = getAiClient();
    if (!client) {
        return null;
    }
    
    const chat = client.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: 'You are AcadMate, a friendly and helpful academic assistant. You help students with their questions, explain concepts, and provide study support. Your tone is encouraging and clear.',
        },
    });
    return chat;
}