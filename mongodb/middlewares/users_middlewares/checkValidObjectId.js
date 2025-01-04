const { isValidObjectId } = require('mongoose');

const checkValidObjectId = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: 'invalid id' });
  }
};

module.exports = checkValidObjectId;
