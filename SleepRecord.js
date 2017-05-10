var mongoose = require("mongoose");

var sleepRecordSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    fallAsleepTime: {
        type: Date,
        required: true
    },
    wakeupTime: {
        type: Date,
        required: true
    },
    timezone: {
        type: String,
        required: true
    }
});

// indexes

sleepRecordSchema.index({ userId: 1, fallAsleepTime: -1, wakeupTime: -1 });

sleepRecordSchema.set('autoIndex', true);

module.exports = sleepRecordSchema;