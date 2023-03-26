"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const copyGenerics = (outdir) => {
    fs_1.default.cpSync(path_1.default.join(__dirname, "../generics"), outdir, { recursive: true });
};
exports.default = copyGenerics;
//# sourceMappingURL=copyGenerics.js.map