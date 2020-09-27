const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const PackageItem = require('../models/PackageItem')

router.get('/:packageGroupId/:packageId',(req,res)=>{
	// console.log(req.params);
	PackageItem.findOneAndDelete({packageGroupId: req.params.packageGroupId, name: req.params.packageId}).then((doc)=>{
		// console.log(doc)
		doc.imageUrls.forEach((img)=>{
			let path = __dirname + "/build/images/" + img;
			path = path.replace('\admin','')

			if (fs.existsSync(path)) {
    			fs.unlinkSync(path)
			}
			
		})
		res.json({status:true});
	})
})

module.exports = router;