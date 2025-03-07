require('dotenv').config();
const express = require('express'); 
const databaseConnect = require('./configs/db-config')

const app = express(); 

const port = process.env.PORT || 5000;  

databaseConnect();
app.get('/', (req,res) => {
    res.send("Welcome to the home page")
}); 

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});