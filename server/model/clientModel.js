const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    companyName: String,
    name: String,
    email: String,
    phone: String,
    language: String,
    currency: String,
    notes: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    addresses: [{
        type: Schema.Types.ObjectId,
        ref: 'address'
    }],
    assignments: [{
      type: Schema.Types.ObjectId,
      ref: 'assignment'
    }],
    invoices: [{
        type: Schema.Types.ObjectId,
        ref: 'invoice'
    }],
},
{
  usePushEach: true
});

ClientSchema.static.addAddress = (addressDetail) => {
    const Address = mongoose.model('address');
  
    return this.findById(id)
      .then(client => {
        const address = new Address(
          { 
            street1: addressDetail.street1, 
            street2: addressDetail.street2,
            city: addressDetail.city,
            state: addressDetail.state,
            postal: addressDetail.postal,
            country: addressDetail.country,
            client
          }
        );
        console.log(client);
        client.addresses.push(address);
        return Promise.all([address.save(), client.save()])
          .then(([address, client]) => client);
      });
};

mongoose.model('client', ClientSchema);