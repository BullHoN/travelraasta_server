const express = require('express')
const router = express.Router()
var admin = require("firebase-admin")
const AdminUser = require('../models/adminUser')
const PackageNotification = require('../models/PackageNotification')

router.post('/',(req,res)=>{
	const packageNotification = new PackageNotification({
		queryAbout: req.body.queryAbout,
		userData: req.body.data
	}).save().then(()=>{
		console.log('send notification')
	})
	res.json({status:true})
})

router.get('/',(req,res)=>{
	PackageNotification.find({isCompleted: false}).then((items)=>{
		res.json(items)
	})
})


function sendNotificationToAdmin(token,id) {
    const message = {
        data:{
            title:"New Package Query Arrived",
            body:"Click On The Notification To Accept Else Ignore It ;(",
            id: id      
        },
        token:token,
        android: {
            ttl : 5
        }
    }

    admin.messaging().send(message)
      .then((response) => {
        console.log('Successfully sent message to ' + "admin", response);
      })
      .catch((error) => {
        console.log('Error sending message to' + "admin", error);
      });   

}

module.exports = router