require('dotenv').config();
const express = require('express'); 
const databaseConnect = require('./configs/db-config'); 
const authMiddleware = require('./routes/auth-route')


const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/users", authMiddleware);

const port = process.env.PORT || 5000;  

databaseConnect();
app.get('/', (req,res) => {
    res.send("Welcome to the home page")
}); 

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});