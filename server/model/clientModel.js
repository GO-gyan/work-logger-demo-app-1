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
    }]
},
{
  usePushEach: true
});

ClientSchema.statics.addAddress = function(id, addressDetail) {
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
        client.addresses.push(address);
        return Promise.all([address.save(), client.save()])
          .then(([address, client]) => address);
      });
};

ClientSchema.statics.addAssignment = function(id, assignmentDetail) {
    const Assignment = mongoose.model('assignment');
  
    return this.findById(id)
      .then(client => {
        const assignment = new Assignment(
          { 
            title: assignmentDetail.title,
            description: assignmentDetail.description,
            charges: assignmentDetail.charges,
            chargeType: assignmentDetail.chargeType,
            client
          }
        );
        client.assignments.push(assignment);
        return Promise.all([assignment.save(), client.save()])
          .then(([assignment, client]) => assignment);
      });
};

ClientSchema.statics.findAddresses = function(id) {
    return this.findById(id)
      .populate('addresses')
      .then(client => client.addresses);
}

ClientSchema.statics.findAssignments = function(id) {
    return this.findById(id)
      .populate('assignments')
      .then(client => client.assignments);
}

mongoose.model('client', ClientSchema);