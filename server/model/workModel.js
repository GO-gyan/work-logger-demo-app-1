const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
    title: String,
    description: String,
    noOfHours: String
});

mongoose.model('work', WorkSchema);