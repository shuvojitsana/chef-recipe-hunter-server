const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000 ;

const recipes = require('./data/recipes.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('chef recipe hunter')
})

app.get('/recipes', (req, res) =>{
    res.send(recipes);
})

app.get('/recipes/:id', (req, res) =>{
    const id = req.params.id;
    const selectedRecipes = recipes.find(recipe => recipe._id == id);
    res.send(selectedRecipes);
})

app.listen(port, () =>{
    console.log(`chef API running on a ${port}`);
})