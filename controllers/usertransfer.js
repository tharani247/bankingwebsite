const userTable = require('../models/usermodel');

exports.fetchData = async (req, res) => {
  try {
    const userData = await userTable.find();
    if (!userData) {
      res.send('No data');
    }
    res.render('../views/pages/transfermoney', { userData });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'Error',
      message: 'Some Server error',
    });
  }
};
