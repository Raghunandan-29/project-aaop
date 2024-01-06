const express = require('express');
const mongoose = require('mongoose');
const Registeruser = require('./model');
const Adminuser = require('./adminmodel');
const Addevent = require('./eventmodel');
const Clubs = require('./clubmodel');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');
const verifyToken =require('./verifymiddleware');
const cors = require('cors');
const app = express();
const multer = require("multer");
const path = require('path');
const events = mongoose.model('Addevent');
const { ObjectId } = require('mongodb');
const verifymiddleware = require('./verifymiddleware');
const clubs = mongoose.model('Clubs');


mongoose.connect("mongodb://localhost:27017/users",{
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useCreateIndex : true
}).then(
    () => console.log('DB Connection established')
)

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'eventsposters'); // Store images in the 'poster' folder
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },

    // destination: "EventsPosters",
    // filename: (req, file, cb) => {
    //   cb(null, Date.now() + "-" + file.originalname);
    // },
  });
  const upload = multer({ 
    storage: Storage 
})
// mongoose.connect("mongodb://localhost:27017/admin",{
//     // useUnifiedTopology: true,
//     // useNewUrlParser: true,
//     // useCreateIndex : true
// }).then(
//     () => console.log('DBAdmin Connection established')
// )
// mongoose.connect("mongodb://127.0.0.1:27017/users",{
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex : true
// }).then(
//     () => console.log('DB Connection established')
// )

app.use(express.json());
app.use(bodyParser.json());
app.use('/eventsposters', express.static(path.join(__dirname, 'eventsposters')));


app.use(cors({origin:"*"}))

app.post('/register',async (req, res) =>{
    
    
    try{
        
        const {username,email,password,confirmpassword} = req.body;
        let exist = await Registeruser.findOne({email});
        
        if(exist){
            return res.status(400).send('User Already Exist')
        }
        if(password !== confirmpassword){
            return res.status(400).send('Passwords are not matching');
        }
        
        let newUser = new Registeruser({
            username,
            email,
            password,
            confirmpassword
        })
        await newUser.save();
        res.status(200).send('Registered Successfully')

    }
    catch(err){
        console.log(err)
        return res.status(500).send('Internel Server Error')
    }
})

app.post('/login',async (req, res) => {
    try{
        const {email,password} = req.body;
        let exist = await Registeruser.findOne({email});
        if(!exist) {
            return res.status(400).send('User Not Found');
            
        }
        if(exist.password !== password) {
            return res.status(400).send('Invalid credentials');
            
        }
        let payload = {
            user:{
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
          (err,token) =>{
              if (err) throw err;
            //   localStorage.setItem('token', token);
              return (
                res.json({token})
              ); 
          }  
            );

    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})
app.post('/adminlogin',async (req, res) => {
    try{
        const {email,password} = req.body;
        let exist = await Adminuser.findOne({email});
        if(!exist) {
            return res.status(400).send('User Not Found');
        }
        if(exist.password !== password) {
            return res.status(400).send('Invalid credentials');
        }
        let payload = {
            user:{
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
          (err,token) =>{
              if (err) throw err;
              return res.json({token})
          }  
            )

    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.get('/home',middleware,async(req, res)=>{
    try{
        let exist = await Registeruser.findById(req.user.id);
        if(!exist){
            return res.status(400).send('User not found');
        }
        res.json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})
app.get('/admin',middleware,async(req, res)=>{
    try{
        let exist = await Adminuser.findById(req.user.id);
        if(!exist){
            return res.status(400).send('User not found');
        }
        res.json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})


//Add events
app.post('/addevent',upload.single('image'),async (req, res) =>{
    console.log("event");
    try{
        const {name,date,text,time,venue,description} = req.body;
        const imagepath = req.file.filename;
        // const imagePath = req.file.path;
        // const image = {
        //     data:req.file.buffer,
        //     contentType:req.file.mimetype,
        // };
        let exist = await Addevent.findOne({name})
        if(exist){
            return res.status(400).send('Event Already Exist')
        }
        let newEvent = new Addevent({
            name,
            // id,
            date,
            time,
            venue,
            text,
            imagepath,
            description
        });
        await newEvent.save();
        res.status(200).send('Event Added Successfully')

    }
    catch(err){
        console.log(err)
        return res.status(500).send('Internel Server Error')
    }
})
//get event details
app.get('/events', async(req,res) =>{

    // Addevent.find({}, (err, events) => {
    //     if (err) {
    //       console.error(err);
    //       res.status(500).json({ error: 'Failed to retrieve events.' });
    //     } else {
    //       res.status(200).json(events);
    //     }
    //   });

    try {
        const eventsarray= await events.find({});
        res.send({status: 200, data: eventsarray});
        
    } catch (error) {
        console.log(error);
    }
    
});


// API endpoint to get an image by filename
app.get('/eventsposters/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'eventsposters', filename));
    
  });
//Single Event page details
app.get('/singleevent/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const singleevent= await Addevent.findOne({ _id: new ObjectId(id) });
        res.send({status: 200, data: singleevent});
        
    } catch (error) {
        console.log(error);
    }
});
//clubs 
app.get('/clubs', async(req,res) =>{
    try {
        const clubsarray= await clubs.find({});
        res.send({status: 200, data: clubsarray});
        
    } catch (error) {
        console.log(error);
    }
    
});

  

app.listen(8000,()=>{
    console.log('Server running...')
})



















