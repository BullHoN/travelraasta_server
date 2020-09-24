const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
    packageGroupId: { type: String, index: true },
    name: String,
    price: Number,
    priceType: String,
    scheduleString: String,
    overview: String,
    days: Number,
    night: Number,
    features:[ String ],
    imageUrls:[ String ],
    itenary:[
        {
            title: String,
            desc: String
        }
    ],
    expriredAt: Date,
    inclusions:[ String ]
},{ timestamps: true })

packageSchema.index({ expriredAt: 1 },{ expireAfterSeconds: 0 });

const PackageItem = mongoose.model("Package Item",packageSchema);
module.exports = PackageItem;