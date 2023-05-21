
async function GetToken(){
  try{
    const res = await fetch('https://emeterr-token.onrender.com/refresh_token')
    const data = await res.json()
    const token = data.access_token
    
    return token
    );
  }catch(err){
  return {error: true, err: err}
  }
}



async function ChatBot(word) {
  let sessionID = Math.floor(Math.random() * 378974206843640 + 36893787392073);
  //   let auths = gcloud auth print-access-token;
  try {
    let token = await this.GetToken()
    const response = await fetch(
      `https://dialogflow.googleapis.com/v2/projects/eatrychatbot-axde/agent/sessions/${sessionID}:detectIntent`,
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${token}`,
          "x-goog-user-project": "eatrychatbot-axde",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          query_input: {
            text: {
              text: word,
              language_code: "en-US",
            },
          },
        }),
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
}

// console.log(Model('am hungry'))
export { ChatBot };
