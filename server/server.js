const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()

//MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())

//ROUTES
const postsRoute = require("../src/routes/posts")

app.use("/posts", postsRoute)


app.get('/', (req, res) => {
    res.send("Home")
})

app.get('/posts', (req, res) => {
    res.send("Posts")
})

mongoose.connect("mongodb+srv://admin:admin123@cluster0.csqni.mongodb.net/posts?retryWrites=true&w=majority", {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, () => {
    console.log("Connected!")
})

app.listen(3000);