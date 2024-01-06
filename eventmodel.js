const { url } = require('inspector');
const mongoose = require('mongoose');
let Addevent = new mongoose.Schema({
    name :{
        type : String,
        // required : true,
        unique : true,
    },
    description:{
        type: String,
        // required: true,
        unique: true,
    },
    imagepath: {
        type:String,
        // required:true,
    },
    date :{
        type : String,
        // required:true,
    },
    time:{
        type : String,
        // required:true,
    },
    venue:{
        type : String,
        // required:true,
    }
    
})
module.exports = mongoose.model('Addevent',Addevent);