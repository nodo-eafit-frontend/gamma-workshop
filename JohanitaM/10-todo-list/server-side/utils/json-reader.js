const fs = require("fs");

function jsonReader(filePath, callback) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return callback && callback(err);
    }
    try {
      const object = JSON.parse(fileData);
      return callback && callback(null, object);
    } catch (err) {
      return callback && callback(err);
    }
  });
}

module.exports = jsonReader;
