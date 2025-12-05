import { GoogleGenAI } from "@google/genai";
import { Persona, Platform } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSocialContent = async (
  persona: Persona,
  platform: Platform,
  topic: string,
  extraContext: string
): Promise<string> => {
  const model = "gemini-2.5-flash";
  
  const systemInstruction = `
    Você é um Estrategista Digital Sênior da adidas Brasil.
    Sua missão é criar conteúdo para redes sociais seguindo o "Tom de Voz" da marca: Inspirador, autêntico, urbano, inovador e inclusivo.
    
    Diretrizes de Marca:
    - Slogan Global: "Impossible is Nothing".
    - Campanha Atual: "O Melhor de Nós" (Foco em comunidade e família).
    
    Você deve adaptar o tom para a Persona selecionada:
    - Hypebeast/Gen Z: Gírias atuais, foco em tendências, exclusividade, moda urbana.
    - Atleta: Foco técnico, performance, superação, dados.
    - Casual/Família: Conforto, durabilidade, presentes, tom acolhedor.
    - Consciente: Foco ambiental, sustentabilidade, materiais reciclados.

    O conteúdo deve ser em Português do Brasil (PT-BR).
  `;

  const prompt = `
    Crie um roteiro ou legenda para um post da adidas.
    
    Plataforma: ${platform}
    Persona Alvo: ${persona}
    Tópico/Produto: ${topic}
    Contexto Adicional: ${extraContext}
    
    Estruture a resposta da seguinte forma:
    1. **Ideia Central (Hook):** Uma frase curta para prender a atenção.
    2. **Sugestão Visual:** Descreva o que deve aparecer na imagem ou vídeo (cenário, ângulos, cortes).
    3. **Legenda/Roteiro:** O texto que vai na legenda ou o que será falado no vídeo.
    4. **Hashtags:** 5-7 hashtags relevantes para o mercado brasileiro.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, // Criativo mas consistente
      },
    });

    return response.text || "Não foi possível gerar o conteúdo. Tente novamente.";
  } catch (error) {
    console.error("Erro ao gerar conteúdo:", error);
    return "Ocorreu um erro ao conectar com a IA da adidas. Verifique sua chave de API.";
  }
};