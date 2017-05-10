var mongoose = require("mongoose");

var schema = mongoose.Schema({
    planId: {
        type: String,
        required: true
    },
    elapsedTime: {
        type: Number,
        required: true
    },
    criedOutTimes: {
        type: Number,
        required: true
    },
    sootheTimes: {
        type: Number,
        required: true
    },
    trainingTime: {
        type: Date,
        default: Date.now()
    }
});

// indexes

schema.index({ planId: 1, trainingTime: 1});
schema.set('autoIndex', true);

module.exports = schema;