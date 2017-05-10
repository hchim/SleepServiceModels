var mongoose = require("mongoose");

var schema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    startDate: {
        type: Date,
        required: true
    },
    firstWeekTime: {
        sootheTime: Number,
        firstCriedOut: Number,
        secondCriedOut: Number,
        followingCriedOut: Number
    },
    secondWeekTime: {
        sootheTime: Number,
        firstCriedOut: Number,
        secondCriedOut: Number,
        followingCriedOut: Number
    },
    followingWeekTime: {
        sootheTime: Number,
        firstCriedOut: Number,
        secondCriedOut: Number,
        followingCriedOut: Number
    }
});

// indexes

schema.index({ userId: 1});

schema.set('autoIndex', true);

module.exports = schema;