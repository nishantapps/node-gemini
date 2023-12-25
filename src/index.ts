const axios = require('axios');
export class Gemini {
    static apiKey:string;
    static makersuiteKey:string;
    static temperature:number;
    static topP:number;
    static topK:number;
    static maxOutputTokens:number;
    static initialize(apiKey:string, makersuiteKey:string,temperautre?:number,
        topP?:number,
        topK?:number,
        maxOutputTokens?:number){
        this.apiKey = apiKey;
        this.makersuiteKey = makersuiteKey;
        this.temperature = temperautre || 0.5;
        this.topP = topP || 1;
        this.topK = topK || 40;
        this.maxOutputTokens = maxOutputTokens || 100;
    }
    static ask(question:string) {
        const options = {
            method: 'GET',
            url: 'https://google-bard1.p.rapidapi.com/v1/gemini/gemini-pro',
            headers: {
              api_key: this.makersuiteKey,
              text: encodeURIComponent(question),
                temperature: this.temperature,
                top_p: this.topP,
                top_k: this.topK,
                maxOutputTokens: this.maxOutputTokens,
              'X-RapidAPI-Key': this.apiKey,
              'X-RapidAPI-Host': 'google-bard1.p.rapidapi.com'
            }
          };
            return axios.request(options).then(function (response: any) {
                return response.data;
            }).catch(function (error: any) {
                throw new Error(error);
            });
    }
}