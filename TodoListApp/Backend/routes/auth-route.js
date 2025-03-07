const express = require('express'); 
const router = express.Router(); 
const {registerUser, signInUser} = require("../controllers/auth-controller")
//register a user
router.post('/register', registerUser); 

//login a user 
router.post('/login', signInUser); 

module.exports = router; 