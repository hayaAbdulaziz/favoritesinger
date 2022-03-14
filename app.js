const express = require ('express');
const mongose = require ('mongoose');
const app = express();

const methodOverride = require('method-override');

const Singer = require("./module/singer.js")
const router = require ("./routes/singer")

app.use(methodOverride('_method' , {methods: ['POST', 'GET']}));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

mongose.connect('mongodb://localhost:27017/singer',{useNewUrlParser: true,
useUnifiedTopology: true});



app.use('/' , router);

app.listen(3000,()=>console.log('express started!'));
