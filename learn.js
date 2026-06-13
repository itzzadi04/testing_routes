let people = require(`./data.js`);
const express = require(`express`);
app=express();
const peoplee= require(`./routes/people.js`);

app.use(express.json());

app.use(`/api/people`,peoplee);
app.listen(5000,()=>`server is on 5000`)