const express = require('express');
const router = express.Router();
const AdminUser = require('../models/adminUser')

const authToken = "qjdbfismgoeyztrn6532asjafs"

router.post('/',(req,res)=>{

	if(req.query.authToken != authToken){
		res.sendStatus(404,"Not Found")
		return;
	}

	AdminUser.findOne({name : req.body.name}).then((user)=>{
		if(user){
			user.token = req.body.fcmToken;
			user.save().then(()=>{
				res.json({status: true})
			});
		}else {
			const adminUser = new AdminUser({
				name: req.body.name,
				token: req.body.fcmToken
			}).save().then(()=>{
				console.log("New Admin " + req.body.name + " is registered");
				res.json({status: true})
			})
		}
	})

})

module.exports = router;