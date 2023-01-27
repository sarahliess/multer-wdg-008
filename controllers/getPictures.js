const pool = require("../db");

const getPictures = async (req, res) => {
  try {
    const { rows: images } = await pool.query("SELECT * FROM pictures");
    res.status(200).json(images);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getPictures;
