const express = require('express')
const router = express.Router()

let packageItems = [
	{
		name: 'goa wale beach me',
		packageGroupId: 'goa',
		price: 2100,
		days: 1,
		night: 2,
		imageUrls: ['Nepal.jpeg','ssdgsdg.asf'],
		features : ['Hotels','Flights','Sightseeing']
	},
	{
		name: 'zeher package2',
		packageGroupId: 'mumbai',
		price: 1234,
		days: 1,
		night: 2,
		imageUrls: ['Nepal.jpeg','ssdgsdg.asf'],
		features : ['Hotels','Flights','Sightseeing']
	},
	{
		name: 'zeher package3',
		packageGroupId: 'mumbai',
		price: 1234,
		days: 1,
		night: 2,
		imageUrls: ['Nepal.jpeg','ssdgsdg.asf'],
		features : ['Hotels','Flights','Sightseeing']
	},
	{
		name: 'zeher package4',
		packageGroupId: 'mumbai',
		price: 1234,
		days: 1,
		night: 2,
		imageUrls: ['Nepal.jpeg','ssdgsdg.asf'],
		features : ['Hotels','Flights','Sightseeing']
	},
	{
		name: 'zeher package5',
		packageGroupId: 'mumbai',
		price: 1234,
		days: 1,
		night: 2,
		imageUrls: ['Nepal.jpeg','ssdgsdg.asf'],
		features : ['Hotels','Flights','Sightseeing']
	},
	{
		name: 'zeher package6',
		packageGroupId: 'mumbai',
		price: 1234,
		days: 1,
		night: 2,
		imageUrls: ['Nepal.jpeg','ssdgsdg.asf'],
		features : ['Hotels','Flights','Sightseeing']
	}					
]

router.get('/',(req,res)=>{
	res.json(packageItems)
})

router.post('/:index',(req,res)=>{
	let index = parseInt(req.params.index);

	packageItems[index].name = req.body.name;
	packageItems[index].packageGroupId = req.body.packageGroupId
	packageItems[index].price = req.body.price
	packageItems[index].days = req.body.days
	packageItems[index].night = req.body.night
	packageItems[index].imageUrls = req.body.imageUrls
	packageItems[index].features = req.body.features

	res.json({status:true})
})

module.exports = router;