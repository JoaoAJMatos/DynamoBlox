// Storage handler for DynamoBlox
const fs = require('fs-extra');
const path = require('path');

class Db {
      constructor(filePath, defaultData) {
            this.filePath = filePath;
            this.defaultData = defaultData;
      }

      read() {
            if (!fs.existsSync(this.filePath)) return [this.defaultData]; // Return default data if the file does not exist

            var fileContent = fs.readFileSync(this.filePath);
            if (fileContent.length == 0) return [this.defaultData]; // Return default data if the file is empty

            return  JSON.parse(fileContent);
      }

      write(data) {
            fs.ensureDirSync(path.dirname(this.filePath));
            fs.writeFileSync(this.filePath, JSON.stringify(data, null, 4));
      }
}

module.exports = Db;