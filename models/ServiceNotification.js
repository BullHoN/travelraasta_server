const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    serviceType: String,
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
    },
    flightData:{
        isRoundTrip: Boolean,
        fromCity: String,
        toCity: String,
        departDate: String,
        returnDate: String,
        flightAndPassInfo: {
            adults: Number,
            childs: Number,
            infants: Number,
            travelClass: String
        }
    },
    tourData: {
        destination: String,
        origin: String,
        departDate: String,
        hotelType:String,
        hotelAndPassInfo: {
            adults: Number,
            childs: Number,
            infants: Number,
            meal: String
        }
    },
    hotelData: {
        fromCity: String,
        checkInDate: String,
        returnDate: String,
        hotelName: String,
        hotelAndPassInfo: {
            adults: Number,
            childs: Number,
            infants: Number,
            meal: String
        }
    },
    busData: {
        fromCity: String,
        toCity: String,
        date: String,
        busClass: String,
        busAndPassInfo: {
            adults: Number,
            childs: Number,
            infants: Number,
            travelType: String
        }
    },
    guideData:{
        destination: String,
        hireInDate: String,
        hireOutDate: String,
        guide:String,
        typeOfTourist: String
    },
    eventData: {
        destination: String,
        dateOfEvent: String,
        arrivalDate: String,
        departureDate: String,
        selectedEvent: String,
        pax: String,
        hotel: String,
        meals: String
    }
},{ timestamps: true })

const ServiceNotification = mongoose.model('Service Notification',serviceSchema);

module.exports = ServiceNotification;