const { Gemini } = require('./node-gemini');

const config = {
  key: 'YOUR_API_KEY',
  apikey: 'YOUR_RAPIDAPI_KEY',
  temperature: 0.7,
  top_k: 10,
  top_p: 0.8,
  maxOutputTokens: 50,
};

Gemini.setConfig(config);

async function main() {
  try {
    const userQuestion = 'Why are you so advanced?';
    const response = await Gemini.createText(userQuestion);
    console.log("Response:", response);


  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
