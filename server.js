const express = require('express');
const app = express();
const fetch = require('cross-fetch');
const port = 3000;

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbx4bkGkLdV86NVl1OvAPDG40g5Y5GlGOzszk4GxRX1SEM0lpHl04a7svaOrxQG0coHG/exec";

var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/icons', express.static('icons'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req,res) => {
  try{
      var userMessage = {
        name : req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        body : req.body.body
      }
        const url = `${GOOGLE_SHEET_URL}?name=${encodeURIComponent(userMessage.name)}&email=${encodeURIComponent(userMessage.email)}&subject=${encodeURIComponent(userMessage.subject)}&body=${encodeURIComponent(userMessage.body)}}`;
        fetch(url).catch(e => res.redirect("/") );
    } catch{ 
        res.redirect("/");
          }
  res.redirect('/#contact');
});
app.listen(process.env.PORT || port, () => {
  console.log(`app listening at http://localhost:${port}`)
});
