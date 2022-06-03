const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    'age': 29,
    'birthName': "Shéyaa Bin Abraham-Joseph",
    'birthLocation': "Londeon, England",
  },
  "chance the rapper": {
    'age': 29,
    'birthName': "Chancelor Bennett",
    'birthLocation': "Chicago, Illinois, U.S",
  },
  'unknown': {
    'age': 29,
    'birthName': "unknown",
    'birthLocation': "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const rappersName = request.params.name.toLowerCase();
  if (rappers[rappersName]) {
    response.json(rappers[rappersName]);
  } else {
    response.json(rappers["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it!`);
});
