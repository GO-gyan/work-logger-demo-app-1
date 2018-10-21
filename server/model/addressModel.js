const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    street1: String,
    street2: String,
    city: String,
    state: String,
    postal: String,
    country: String,
    client: {
        type: Schema.Types.ObjectId,
        ref: 'client'
    }
});

mongoose.model('address', AddressSchema);