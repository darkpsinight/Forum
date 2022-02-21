const express = require("express");
const multer = require("multer");
const fs = require("fs");
const dir = "./uploads";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    //fonction pour ajouter des nouveaux files sans l'intégrer manuellement
    /************************/
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    callback(null, "./uploads");
  },
  /***************************/
  filename: function (req, file, callback) {
    callback(null, Date.now()+'-'+file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  //function to control which files are accepted
  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/png" ||
    "application/pdf"
  ) {
    //mimetype of the file
    callback(null, true);
  } else {
    callback(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
module.exports = upload;