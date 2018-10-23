const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
    title: String,
    description: String,
    noOfHours: Number,
    assignment: {
        type: Schema.Types.ObjectId,
        ref: 'assignment'
    }
});

mongoose.model('work', WorkSchema);