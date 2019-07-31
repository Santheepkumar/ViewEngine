const express = require('express');
const app = express();

const path = require("path")


var port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"))

app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render('index')
})


app.listen(3000, () => console.log('server is running at 3000...'))