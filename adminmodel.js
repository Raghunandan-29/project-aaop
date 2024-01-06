const { url } = require('inspector');
const mongoose = require('mongoose');

let Adminuser = new mongoose.Schema({
    email :{
        type : String,
        // required : true,
        unique : true,
    },
    password :{
        type : String,
        // required:true,
    }
})
module.exports = mongoose.model('Adminuser',Adminuser);