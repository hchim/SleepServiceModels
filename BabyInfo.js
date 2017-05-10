var mongoose = require("mongoose");

var babyInfoSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    birthday: String,
    gender: Number,
});

// indexes

babyInfoSchema.index({ userId: 1});
babyInfoSchema.set('autoIndex', true);

// methods

module.exports = babyInfoSchema;