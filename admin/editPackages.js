const express = require('express')
const router = express.Router()
const PackageItem = require('../models/PackageItem')

router.get('/',(req,res)=>{
	PackageItem.distinct('packageGroupId',function (err,result) {
		res.json(result)
	})
})

module.exports = router;