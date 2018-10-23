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

AssignmentSchema.statics.addWork = function(id, worksDetail) {
    const Work = mongoose.model('work');
  
    return this.findById(id)
      .then(assignment => {
        const work = new Work(
          { 
            title: worksDetail.title, 
            description: worksDetail.description,
            noOfHours: worksDetail.noOfHours,
            assignment
          }
        );
        assignment.works.push(work);
        return Promise.all([work.save(), assignment.save()])
          .then(([work, assignment]) => work);
      });
};

AssignmentSchema.statics.addInvoice = function(id, invoiceDetail) {
    const Invoice = mongoose.model('invoice');
  
    return this.findById(id)
      .then(assignment => {
        const invoice = new Invoice(
          { 
            description: invoiceDetail.description,
            date: invoiceDetail.date, 
            totalTime: invoiceDetail.totalTime,
            totalAmount: invoiceDetail.totalAmount,
            amountPaid: invoiceDetail.amountPaid,
            assignment
          }
        );
        assignment.invoices.push(invoice);
        return Promise.all([invoice.save(), assignment.save()])
          .then(([invoice, assignment]) => invoice);
      });
};

mongoose.model('assignment', AssignmentSchema);