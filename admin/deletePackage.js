const express = require('express')
const router = express.Router()
const PackageItem = require('../models/PackageItem')

router.get('/:packageGroupId/:packageId',(req,res)=>{
	// console.log(req.params);
	PackageItem.findOneAndDelete({packageGroupId: req.params.packageGroupId, name: req.params.packageId}).then(()=>{
		res.json({status:true});
	})
})

module.exports = router;