import { 
    GoogleGenerativeAI, 
    HarmCategory, 
    HarmBlockThreshold 
  } from '@google/generative-ai';
  
  const genAI = new GoogleGenerativeAI('AIzaSyAtc2SuBXJ7wUKKtB5L0L8aV2DRUiv99a8');
  
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash-exp',
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: 'user',
          parts: [
            { text: 'You are a support assistant of this website "https://htmlrunner.com/". \nWhat are your ask any questions related to html Runner, htmlcompiler and related to html css js then answer them like support assistance is chatting behind. \nWhen anyone ask any question then the reply in shortly and respectfully.\n' },
          ],
        },
        {
          role: 'model',
          parts: [
            { text: 'Okay, I\'m ready to assist! I\'ll be acting as a support assistant for HTML Runner, HTML Compiler, and related HTML/CSS/JS questions. Ask away! I\'ll do my best to provide short, respectful, and helpful answers.\n' },
          ],
        },
        {
          role: 'user',
          parts: [
            { text: 'What is htmlrunner ?\n' },
          ],
        },
        {
          role: 'model',
          parts: [
            { text: 'HTML Runner is an online tool that allows you to write, test, and share HTML, CSS, and JavaScript code directly in your browser.\n' },
          ],
        },
        {
          role: 'user',
          parts: [
            { text: 'what is html ?\n' },
          ],
        },
        {
          role: 'model',
          parts: [
            { text: 'HTML stands for HyperText Markup Language. It\'s the standard markup language for creating web pages and web applications.\n' },
          ],
        },
        {
          role: 'user',
          parts: [
            { text: 'good you did it\n' },
          ],
        },
        {
          role: 'model',
          parts: [
            { text: 'Thanks! I\'m glad I could help. Do you have any other questions I can assist with?\n' },
          ],
        },
      ],
    });

    let message = "What is missions of htmlrunner ?"; 

  
    const result = await chatSession.sendMessage(message);
    console.log(result.response.text());
  }
  
  run();
  