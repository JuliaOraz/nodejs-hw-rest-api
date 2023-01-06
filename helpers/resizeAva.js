var Jimp = require("jimp");
const path = require("path");
const resizeAva = (ava) => {
  const func = async (req, res, next) => {
    try {
      const { path: tempUpload, originalname } = req.file;
      console.log(tempUpload);
      const avatar = await Jimp.read(ava);
      avatar.resize(256, 256);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

module.exports = resizeAva;
