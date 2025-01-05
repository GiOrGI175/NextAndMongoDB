const { default: mongoose } = require('mongoose');

const expenseSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model('expense', expenseSchema);
