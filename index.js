var babyInfoSchema = require('./BabyInfo')
var sleepRecordSchema = require('./SleepRecord')
var trainingPlanSchema = require('./TrainingPlan')
var trainingRecordSchema = require('./TrainingRecord')

exports.BabyInfo = function (conn) {
    return conn.model('BabyInfo', babyInfoSchema);
}

exports.SleepRecord = function (conn) {
    return conn.model('SleepRecord', sleepRecordSchema);
}

exports.TrainingPlan = function (conn) {
    return conn.model('TrainingPlan', trainingPlanSchema);
}

exports.TrainingRecord = function (conn) {
    return conn.model('TrainingRecord', trainingPlanSchema);
}