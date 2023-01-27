require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const upload = require("./utils/upload");
const handleUpload = require("./controllers/handleUpload");

const getPicsRoute = require("./routes/getPictures");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", getPicsRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

///app.post(1. route, 2. middleware, 3. controller)
app.post("/upload-profile-pic", upload.single("profile_pic"), handleUpload);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
