//imports
const express = require("express");
const cors = require("cors");

//assign the imports to variable for ease of use
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/users/", (req,res) => {
    let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riley'];
    res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });

//set up server
app.listen(4000, () => console.log('Server is running on port 4000'));