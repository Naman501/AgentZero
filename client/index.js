require('dotenv').config()
const readline = require('readline/promises')
const { GoogleGenAI }=require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works",
  });
  console.log(response.text);
}

await main();

const chatHistory=[]

const rl= readline.Interface({
    input: process.stdin,
    output: process.stdout,
})

async function chatLoop(){

    const question= await rl.question('You: ');

    chatHistory.push({
        role: "user",
        content : question
    })

    const response=await ai.models.generateContent
}