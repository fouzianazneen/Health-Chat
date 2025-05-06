export const handler = (req, res) => {
      const intent = req.body.queryResult.intent.displayName;
      let responseText = "";
       if (intent === "Greeting") {
       responseText = "Hello! I am your Health Assistant. How can I help you today?";
       }
        res.json({ fulfillmentText: responseText });
    };