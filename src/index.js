const axios = require('axios');

let config = {
  temperature: 0.5,
  top_k: undefined,
  top_p: undefined,
  maxOutputTokens: undefined,
};

function setConfig(newConfig) {
  config = { ...config, ...newConfig };
}

async function createText(text) {
  if (!config.apikey || !config.key) {
    throw new Error("API key and key must be set before making a request.");
  }

  const requestOptions = {
    method: 'GET',
    url: 'https://google-bard1.p.rapidapi.com/v1/gemini/gemini-pro',
    headers: {
      'api-key': config.apikey,
      text: text,
      'X-RapidAPI-Key': config.key,
      'X-RapidAPI-Host': 'google-bard1.p.rapidapi.com',
    },
    params: {
      temperature: config.temperature,
      top_k: config.top_k,
      top_p: config.top_p,
      max_output_tokens: config.maxOutputTokens,
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
