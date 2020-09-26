const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const PackageItem = require('../models/PackageItem')

storage = multer.diskStorage({
    destination: './build/images',
    filename: function(req, file, cb) {
    	let path = __dirname + "/build/images/" + file.originalName;
    	path = path.replace('\admin','')

    	if (fs.existsSync(path)) {
    		fs.unlinkSync(path)
		}
      	return cb(null,file.originalname);
    }
});

multerMiddleWare = multer({
    storage: storage
  }).array('upload',2);

router.post('/',multerMiddleWare,(req,res)=>{
    let packageData = JSON.parse(req.body.data)

    let expriredAt = getDate(packageData['expriredAt'])
    // console.log(req.files);

    PackageItem.findOne({packageGroupId: packageData['packageGroupId'], name: packageData['name']}).then((item)=>{
    	if(item){
    		item.price = packageData['price']
    		item.packageGroupId = packageData['packageGroupId']
    		item.priceType = packageData['priceType']
    		item.scheduleString = packageData['scheduleString']
    		item.overview = packageData['overview']
    		item.days = packageData['days']
    		item.night = packageData['night']
    		item.features = packageData['features']
    		item.imageUrls = packageData['imageUrls']
    		item.itenary = packageData['itenary']
    		// item.expriredAt = expriredAt
    		item.inclusions = packageData['inclusions']

    		item.save().then(()=>{
    			console.log('package data updated...')
    		})

    	}else {
			let packageItem = new PackageItem({
				packageGroupId: packageData['packageGroupId'],
				name: packageData['name'],
				price: packageData['price'],
				priceType: packageData['priceType'],
				scheduleString: packageData['scheduleString'],
				overview: packageData['overview'],
				days: packageData['days'],
				night: packageData['night'],
				features: packageData['features'],
				imageUrls: packageData['imageUrls'],
				itenary: packageData['itenary'],
				expriredAt: expriredAt,
				inclusions: packageData['inclusions']
			}).save().then(()=>{
				console.log('new package saved...');
			})
    	}
    })

    res.json({status:true});
})

function getDate(dateString) {

	let return_date = new Date()

	//23-8-2020
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