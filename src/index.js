const axios = require('axios');

let config = {}

function setConfig(newConfig) {
  config = newConfig;
}

async function createText(text) {
  if (!config.apikey || !config.key) {
    throw new Error("API key and key must be set before making a request.");
  }

  const requestOptions = {
    method: 'GET',
    url: 'https://google-bard1.p.rapidapi.com/v1/gemini/gemini-pro',
    headers: {
      'api_key': config.apikey,
      text: encodeURIComponent(text),
      temperature:config.temperature || 0.7,
      top_k: config.top_k || 1,
      top_p: config.top_p || 1,
      maxOutputTokens: config.maxOutputTokens || 2000
      'X-RapidAPI-Key': config.key,
      'X-RapidAPI-Host': 'google-bard1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(requestOptions);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const Gemini = {
  setConfig,
  createText,
};

module.exports =  Gemini;
