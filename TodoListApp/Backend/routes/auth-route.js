const express = require('express'); 
const router = express.Router(); 

//register a user
router.post('/register'); 

//login a user 
router.post('/login'); 

module.exports = router; 