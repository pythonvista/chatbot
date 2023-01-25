async function ChatBot(word) {
  let sessionID = Math.floor(Math.random() * 378974206843640 + 36893787392073);
  //   let auths = gcloud auth print-access-token;
  try {
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
            "Bearer ya29.a0AVvZVsqRagLK5G1sxVPPkeyPRwmG9pBfs1cUBjU0lc57l13sssgDGgMAUyXmSfqGaCjqC0QQ7sBeRT_p0Mu5j54jZ72Lf4emLgeODQmiqE49wI82nTWREYdPQYsK6exTZLlyMJ7BxjvAewzF3fr1Ypd4falDp3O02gtMcgaCgYKAbQSAQASFQGbdwaIiyOmewtMuWOJUQaE2u8LfA0173",
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
