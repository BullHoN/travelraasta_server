const mongoose = require('mongoose');


const adminSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	token: {
		type: String,
		required: true
	}
},{ timestamps: true }) 

const AdminUser = mongoose.model('Admin User',adminSchema)

module.exports = AdminUser;

