const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true
    },
    hashedPassword: {
       type: String, 
       required:true, 
       minLength: 8
    }
},
    {timestamps: true}
    
); 


const User = mongoose.model('user', UserSchema); 

module.exports = User; 