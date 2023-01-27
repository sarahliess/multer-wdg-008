const pool = require("../db");

const handleUpload = async (req, res) => {
  const { filename, originalname } = req.file;
  const finalPath = `public/images/${filename}`;
  try {
    //UPLOAD TO DATABASE
    const uploadedImage = await pool.query(
      "INSERT INTO pictures (name, path) VALUES ($1, $2) RETURNING *",
      [originalname, finalPath]
    );
    //RENDER IMAGE
    console.log(uploadedImage);
    res.send(
      `<h2>Here is your picture</h2> <img src="/images/${filename}" alt="${filename}"/>`
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = handleUpload;
