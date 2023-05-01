const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ;

app.get('/', (req, res) =>{
    res.send('chef recipe hunter')
})

app.listen(port, () =>{
    console.log(`chef API running on a ${port}`);
})