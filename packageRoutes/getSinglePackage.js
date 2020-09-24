const express = require('express')
const router = express.Router();
const PackageItem = require('../models/PackageItem')

// console.log(PackageItem.getIndexes())

router.get('/:packageId/:packageName',(req,res)=>{
    // console.log(req.params);
    // getQueryInfo(req.params.packageId,req.params.packageName);
    PackageItem.findOne({ packageGroupId: req.params.packageId, name: req.params.packageName }).then((items)=>{
        res.json(items);
    })
})


function getQueryInfo(packageId,packageName){
    PackageItem.findOne({packageGroupId: packageId, name: packageName}).explain("queryPlanner").then((result)=>{
        console.dir(result, { depth: null, colors: true });
    })
}

module.exports = router;