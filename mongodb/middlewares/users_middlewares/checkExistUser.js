const checkExistUser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'email is required' });
  }

  const existUser = await userModel.findOne({ email: email });
  if (existUser) {
    return res.status(400).json({ message: 'user already exists' });
  }
};

module.exports = checkExistUser;
