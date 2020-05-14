const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BudgetTableEntrySchema = new Schema(
    {
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    amount: {
        type: mongoose.Decimal128,
        required: true
    },
    incomeOrDebt: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
       type: String
   },
    date: {
        type: Date,
        default: new Date().toISOString()
    },

})

module.exports = BudgetTableEntry = mongoose.model('BudgetTableEntry', BudgetTableEntrySchema);