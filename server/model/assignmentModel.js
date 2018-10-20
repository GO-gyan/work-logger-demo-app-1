const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    name: String,
    description: String,
    status: String,
    charges: String,
    chargeType: String,
    works: [{
        type: Schema.Types.ObjectId,
        ref: 'work'
    }],
    invoices: [{
        type: Schema.Types.ObjectId,
        ref: 'invoice'
    }],
},
{
  usePushEach: true
});

mongoose.model('assignment', AssignmentSchema);