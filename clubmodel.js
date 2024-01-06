const { url } = require('inspector');
const mongoose = require('mongoose');
let Clubs = new mongoose.Schema({
    name :{
        type : String,
        // required : true,
        unique : true,
    },
    image:{
        type: String,
    }
})
module.exports = mongoose.model('Clubs',Clubs);