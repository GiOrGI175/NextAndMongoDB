const { default: mongoose } = require('mongoose');

const expenseSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  name: {
    type: String,
  },
});

module.exports = mongoose.model('expense', expenseSchema);
