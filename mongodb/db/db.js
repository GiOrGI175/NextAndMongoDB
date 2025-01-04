const { default: mongoose } = require('mongoose');
require('dotenv').config();

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected successfuly');
  } catch (error) {
    console.log(error);
  }
};
