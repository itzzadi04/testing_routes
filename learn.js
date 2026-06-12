let people = require(`./data.js`);
const express = require(`express`);
app=express();
const people= require(`./routes/people.js`);

app.use(express.json());

app.use(`/api/people`,people);
app.listen(5000,()=>`server is on 5000`)