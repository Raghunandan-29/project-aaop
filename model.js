const { url } = require('inspector');
const mongoose = require('mongoose');

let Registeruser = new mongoose.Schema({
    username :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    password :{
        type : String,
        required:true,
    },
    confirmpassword : {
        type : String,
        required : true,
    }
})
// let Adminuser = new mongoose.Schema({
//     email :{
//         type : String,
//         // required : true,
//         unique : true,
//     },
//     password :{
//         type : String,
//         // required:true,
//     }
// })
// let Clubs = new mongoose.Schema({
//     name :{
//         type : String,
//         // required : true,
//         unique : true,
//     },
//     image:{
//         type: String,
//     }
// })

// module.exports = mongoose.model('Adminuser',Adminuser);
module.exports = mongoose.model('Registeruser',Registeruser);
// module.exports = mongoose.model('Clubs',Clubs);