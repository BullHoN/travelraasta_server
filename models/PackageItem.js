const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
    packageGroupId: String,
    name: String,
    price: Number,
    inclusions:[
        {
            name:String
        }
    ],
    scheduleString:String,
    imageUrls:[
        {
            url:String
        }
    ],
    days: Number,
    night: Number
},{ timestamps: true })


const PackageItem = mongoose.model("PackageItem",packageSchema);
module.exports = PackageItem;