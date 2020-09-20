const express = require('express')
const router = express.Router()
const PackageItem = require('../models/PackageItem')

router.get('/:packageId',(req,res)=>{
    PackageItem.find({packageGroupId: req.params.packageId}).then((items)=>{
        res.json(items);
    })
})


module.exports = router;