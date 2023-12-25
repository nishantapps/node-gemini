<div align="center">
<img src="https://cdn.discordapp.com/attachments/1167774555415253042/1184819262196559872/node-gemini.png?ex=658d5bec&is=657ae6ec&hm=4a95f56450864e3679c9883b5244cb55eee304187d3f3eebffdca403666667d8&" >
    <p style="font-style:bold;"><b>Node Gemini | A perfect • fast module to get AI to your projects</b></p>
    <img src="https://github.com/nishantapps/node-gemini/actions/workflows/npm-publish.yml/badge.svg">
    <a href="https://discord.gg/Fnt6qDrJGQ"><img src="https://img.shields.io/discord/1167478609905205430?logo=discord&label=Discord"></a>
  <img src="https://uptime.betterstack.com/status-badges/v1/monitor/xm9u.svg">
</div>


### Installation

Open command prompt and type:
``` shell
npm i @nishantapps/node-gemini
```

### Usage

```js
import { Gemini } from '@nishantapps/node-gemini';

// Initialize Gemini with API keys and optional parameters
Gemini.initialize(apiKey, makersuiteKey, temperature, topP, topK, maxOutputTokens);
const question = "What is the meaning of life?";
Gemini.ask(question)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });

```

### Faq:

>How to get key?

--> Go to https://makersuite.google.com and get it from there

# Contributers


Thanks goes to these wonderful people ([:hugs:](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
    <tbody>
        <tr>
            <td align="center">
    <a href="https://github.com/npmnishantsharma">
        <img style="border-radius:50%;" src="https://avatars.githubusercontent.com/u/99231654?v=4" width="100px;" alt="npmnishantsharma"/>
        <br />
        <sub><b>npmnishantsharma</b></sub>
    </a>
</td>
            <td align="center">
    <a href="https://github.com/Alpha5959">
        <img style="border-radius:50%;" src="https://avatars.githubusercontent.com/u/109584578?v=4" width="100px;" alt="npmnishantsharma"/>
        <br />
        <sub><b>Alpha (Programer)</b></sub>
    </a>
</td>
        </tr>
    </tbody>
</table>