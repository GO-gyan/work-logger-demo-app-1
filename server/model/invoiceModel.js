const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    description: String,
    date: { type: Date, default: Date.now },
    totalTime: { type: Number, default: 0 },
    totalAmount: Number,
    amountPaid: { type: Number, default: 0 },
    status: { type: String, default: 'CREATED'},
    assignment: {
        type: Schema.Types.ObjectId,
        ref: 'assignment'
    },
});

InvoiceSchema.statics.balanceAmount = function(id) {

    return this.findById(id)
      .then(invoice => {
          const balance = invoice.totalAmount - invoice.amountPaid;
          return balance;
      })
  }

mongoose.model('invoice', InvoiceSchema);