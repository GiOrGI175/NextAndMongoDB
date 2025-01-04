const userModel = require('../../models/user.model');

const getAllExpenses = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
};

module.exports = { getAllExpenses };
