const userModel = require('../../models/user.model');

const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
};

const createUser = async (req, res) => {
  const user = await userModel.create(req.body);
  res.json(user);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);

  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }
  res.json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deletedUser = await userModel.findByIdAndDelete(id);
  res.json(deletedUser);
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json({ updatedUser });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUserById,
};
