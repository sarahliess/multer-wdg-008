const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, "./public/images");
  },
  filename: (req, file, next) => {
    next(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
