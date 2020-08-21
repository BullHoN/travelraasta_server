const express = require('express');
const route = express.Router();
const ServiceNotification = require('../models/ServiceNotification');
var admin = require("firebase-admin");
const AdminUser = require('../models/adminUser')

let authToken = "asknkasfnknieniffasasf";

route.get('/update/:id',(req,res)=>{

    // console.log(req.query.completed)
    if(req.query.completed == true || req.query.completed == 'true'){
        ServiceNotification.findById(req.params.id).then((noti)=>{
            if(noti){
                noti.isCompleted = true;
                noti.save();
                res.json({status: true})
            }else {
                res.json({status: false})
            }
        })        
    }else {
        ServiceNotification.findById(req.params.id).then((noti)=>{
            if(noti.isAssigned){
                res.json({status: false})
            }else{
                noti.isAssigned = true;
                noti.save();
                res.json({status:true})
            }
        })
    }
})

route.get('/',(req,res)=>{
    // console.log(req.query);
    if(req.query.auth != authToken){
        res.sendStatus(404,"Not Found");
        return;
    }

    if(req.query.name == ""){
        ServiceNotification.find({isCompleted: req.query.isCompleted }).then((items)=>{
            res.json(items);
        })
    }else {
        ServiceNotification.find({assignedTo: req.query.name, isCompleted: false}).then((items)=>{
            res.json(items);
        })
    }
})

route.post('/',async (req,res)=>{
    
    let nwNoti = makeNotiBody(req.body)

    let items = await AdminUser.find({});

    let n = items.length;
    let start = Math.floor(Math.random() * n)

    console.log('First notification to' + items[start].name,nwNoti._id)
    sendNotificationToAdmin(items[start].token,nwNoti._id+"");
    
    
    nwNoti["assignedTo"] = items[start].name;
    start = (start + 1)%n;

    nwNoti.save().then(async (data)=>{

        console.log('noti saved',data._id);

        startTheService(data._id,items,start,nwNoti);
    })

    res.json({ status:true })
});


function makeNotiBody(body){
    if(body.serviceType == "Flight"){
        return new ServiceNotification({
            serviceType: body.serviceType,
            userData: body.userData,
            flightData: body.data
        })
    }else if(body.serviceType == "Tour"){
        return new ServiceNotification({
            serviceType: body.serviceType,
            userData: body.userData,
            tourData: body.data
        })
    }else if(body.serviceType == "Hotel"){
        return new ServiceNotification({
            serviceType: body.serviceType,
            userData: body.userData,
            hotelData: body.data
        })
    }else if(body.serviceType == "Bus"){
        return new ServiceNotification({
            serviceType: body.serviceType,
            userData: body.userData,
            busData: body.data
        })
    }else if(body.serviceType == "Guide"){
        return new ServiceNotification({
            serviceType: body.serviceType,
            userData: body.userData,
            guideData: body.data
        })
    }else {
        return new ServiceNotification({
            serviceType: body.serviceType,
            userData: body.userData,
            eventData: body.data
        })
    }
}


async function startTheService(id,items,start,nwNoti){
        let n = items.length;
        var notiInterval =  setInterval(async ()=>{
            const noti = await ServiceNotification.findById(id);
            if(noti.isAssigned){
                console.log('clearing interval of',id);
                clearInterval(notiInterval);
            }else {
                nwNoti["assignedTo"] = items[start].name;
                await nwNoti.save();
                sendNotificationToAdmin(items[start].token,nwNoti._id+"");
                console.log('sending notification to' + items[start].name)
                start = (start + 1)%n;
            }
        },30*1000)
}

// sendNotificationToAdmin("d_E1w_l4F_Q:APA91bFp565P28yxfh0gAxUd_jz3tUGorRl_r888cimAl6rvet9PtJ9u16cdyCyhP1teTuENoAH5Nxn3QK4tcWV3q3K0HlrpahQFYgJqyYCLs0FmAKA0WALUnELzpFr3DckXFd9TsoNL","sdsdg")

function sendNotificationToAdmin(token,id) {
    const message = {
        data:{
            title:"New Booking Arrived",
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

module.exports = route;