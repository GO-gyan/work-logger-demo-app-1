const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    title: String,
    description: String,
    status: { type: String, default: 'CREATED' },
    charges: Number,
    chargeType: String,
    client: {
        type: Schema.Types.ObjectId,
        ref: 'client'
    },
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