const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors');
const mongoose = require('mongoose')
const compression = require('compression')

var admin = require("firebase-admin");

var serviceAccount = require("./config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://travelraasta-cf20d.firebaseio.com"
});



// mongoDB connect
mongoose.connect('mongodb+srv://admin:Mw6smfISo3Ity3iC@travelraasta.nqh1c.mongodb.net/travelraasta?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log('connected to mongodb');
}).catch((err)=>{
    console.log('error while connecting to mongodb',err);
})

// middlewares
app.use(compression({
    level: 6
}))
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('build'))

//test 
// const PackageItem = require('./models/PackageItem')
// const packageItem = new PackageItem({
//     packageGroupId: 'rajasthan',
//     name: 'Golden Triangle - Crazy Deal',
//     price: 27199,
//     inclusions:[{ name: "Flights" },{ name: "Hotel" },{ name: "Meals" },{ name: "Sighseeing" }],
//     scheduleString:"Delhi (1N)=>Agra (1N)=>Jaipur (2N)",
//     imageUrls:[{ url: "full url1" },{ url: "full url2" }],
//     days: 5,
//     night: 4
// }).save().then(()=>{
//     console.log('Test Element Saved...');
// })

// routes
app.use('/services',require('./services/serviceRoute'));
app.use('/admin/register',require('./admin/registerAdmin'));
app.use('/pac',require('./packageRoutes/getPackages'))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(5500,()=>{
    console.log('server started')
})