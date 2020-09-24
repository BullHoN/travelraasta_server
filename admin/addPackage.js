const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const PackageItem = require('../models/PackageItem')

storage = multer.diskStorage({
    destination: './build/images',
    filename: function(req, file, cb) {
      return cb(null,file.originalname);
    }
});

multerMiddleWare = multer({
    storage: storage
  }).array('upload',2);

router.post('/',multerMiddleWare,(req,res)=>{
    let packageData = JSON.parse(req.body.data)
    console.log(packageData);

    let date = getDate(packageData['expriredAt'])
    console.log(date)

    for(let i=0;i<req.files.length;i++){
    	changeFileNames(req.files[i]['filename'],packageData['imageUrls'][i])
    }

    res.json({status:true});
})

function getDate(dateString) {

	let return_date = new Date()

	//23-8-2020 3:52
	let split_date = dateString.split(' ');
	let date = parseInt(split_date[0].split('-')[0]);
	let month = parseInt(split_date[0].split('-')[1]);
	let year = parseInt(split_date[0].split('-')[2]);

	return_date.setMonth(month)
	return_date.setYear(year)
	return_date.setDate(date)

	return return_date;
}

function changeFileNames(originalName,finalName) {
	let path1 = __dirname + "/build/images/" + originalName;
	let path2 = __dirname + "/build/images/" + `${finalName}`

	path1 = path1.replace('\admin','')
	path2 = path2.replace('\admin','')

    fs.rename(path1,path2,function (err) {
    	if(err) console.log('err',err);
    })	
}

module.exports = router;