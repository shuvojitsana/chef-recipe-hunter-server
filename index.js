const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ;

const recipes = require('./data/recipes.json')

app.get('/', (req, res) =>{
    res.send('chef recipe hunter')
})

app.get('/recipes', (req, res) =>{
    res.send(recipes);
})

app.listen(port, () =>{
    console.log(`chef API running on a ${port}`);
})