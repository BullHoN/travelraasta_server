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
mongoose.connect('mongodb+srv://admin:Mw6smfISo3Ity3iC@travelraasta.nqh1c.mongodb.net/travelraasta?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true })
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
// function getDate() {
//     let date = new Date()
//     let date2 = new Date(date.getTime() + 30*24*60*60*1000)
//     return date2   
// }

// const PackageItem = require('./models/PackageItem')
// const packageItem = new PackageItem({
//     packageGroupId: 'rajasthan',
//     name: 'Romantic Escapes - Taj Lake Palace - Udaipur',
//     price: 36999,
//     priceType: 'per adult',
//     scheduleString: 'Delhi (1N)=>Agra (1N)=>Jaipur (2N)',
//     overview: 'Take up Chardham pilgrimage tour and explore the four main sites that are situated in the lap of Himalayas in Uttarakhand - Badrinath, Kedarnath, Gangotri and Yamunotri. It is among the most visited shrines by devotees from all across the globe. Enroute you can also visit various shrines and capture the mesmerizing view of Himalayas on camera.',
//     days: 2,
//     night: 3,
//     features: ["Flights","Meals","Hotel","Sighseeing"],
//     imageUrls: ["agra.jpg","package.jpg"],
//     itenary: [
//         {
//             title: 'Delhi - Risikesh',
//             desc: 'Take up Chardham pilgrimage tour and explore the four main sites.'
//         },
//         {
//             title: 'Delhi - Risikesh2',
//             desc: 'Take up Chardham pilgrimage tour and explore the four main sites.'
//         },
//         {
//             title: 'Delhi - Risikesh3',
//             desc: 'Take up Chardham pilgrimage tour and explore the four main sites.'
//         },
//     ],
//     inclusions: ['Sabkuch Milaega Kuch Nahi Chutega!!','alaphalana dhimka dhikana','alaphalana dhimka dhikana'],
//     expriredAt: getDate()
// }).save().then(()=>{
//     console.log('record saved')
// })

// routes
app.use('/services',require('./services/serviceRoute'));
app.use('/admin/addPackage',require('./admin/addPackage'))
app.use('/admin/register',require('./admin/registerAdmin'));
app.use('/pac',require('./packageRoutes/getPackages'));
app.use('/single_pac',require('./packageRoutes/getSinglePackage'));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(5500,()=>{
    console.log('server started')
})