const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')

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
  }).array('upload',6);

let distItems = ['himachal','gujarat','goa','mumbai','jaipur','delhi']

router.get('/destImages',(req,res)=>{
	res.json(distItems);
})

router.post('/destImages',multerMiddleWare,(req,res)=>{
	let temp = req.body.labels + "";
	temp = temp.split(',')
	
	for(let i=0;i<temp.length;i++){
		distItems[i] = temp[i].replace('"','').replace('"','');
	}

	res.json({status: true});
})

module.exports = router;