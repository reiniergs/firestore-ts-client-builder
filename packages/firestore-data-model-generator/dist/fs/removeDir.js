"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rimraf_1 = require("rimraf");
const removeDir = (dirPath) => {
    (0, rimraf_1.rimrafSync)(dirPath);
};
exports.default = removeDir;
//# sourceMappingURL=removeDir.js.map