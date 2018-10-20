const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    description: String,
    date: String,
    totalTime: { type: Number, default: 0 },
    totalAmount: { type: Number, default: 0 },
    amountPaid: Number,
    status: { type: String, default: 'NEW'}
});

InvoiceSchema.statics.balanceAmount = function(id) {
    const Invoice = mongoose.model('invoice');
  
    return Invoice.findById(id)
      .then(invoice => {
          const balance = invoice.totalAmount - invoice.amountPaid;
          return balance;
      })
  }

mongoose.model('invoice', InvoiceSchema);