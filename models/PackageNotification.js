const mongoose = require('mongoose')

const packageSchema = mongoose.Schema({
	queryAbout: String,
    userData: {
        phoneNo: String,
        name: String,
        email: String,
        specialRequest: String
    },
    isAssigned: {
        type: Boolean,
        default: false
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    assignedTo: {
        type: String,
        default: ''
    }
},{ timestamps: true })

const PackageNotification = mongoose.model('Package Notification',packageSchema)

module.exports = PackageNotification