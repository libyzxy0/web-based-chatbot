# web-based-chatbot

![Thumbnail](https://github.com/libyzxy0/web-based-chatbot/blob/main/assets/image/thumbnail.png?raw=true)
* A web base chatbot that uses openai api, GPT-3.5-TURBO!


### Code for backend (Node.js)

```javascript
const express = require("express");
const app = express();
const cors = require("cors");
const { Configuration, OpenAIApi } = require('openai');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true }))

app.post('/gpt3-5-turbo', (req, res) => {
  if(!req.body) {
    res.send({ msg: "error" })
    console.log("An error occurred!")
 } else {
  let { message, key } = req.body;
  const configuration = new Configuration({
  apiKey: key,
});
  const openai = new OpenAIApi(configuration);
  async function openaiCompletion(txt) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: txt }],
    });
    return completion.data.choices[0].message['content']
  } 
  openaiCompletion(message).then((response) => {
    res.send({ text: response })
    console.log(response)
  })
   } 
})

const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`App is listening on port ${port}`))
```
### Inserting an apikey
```javascript 
const data = {
        message, 
        key: "OPEN_AI_API_KEY"
    }
```

##### You can insert your apikey in line 40 'assets/js/script.js'

