"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createDir_1 = __importDefault(require("../fs/createDir"));
const path_1 = __importDefault(require("path"));
const generations_1 = __importDefault(require("./generations"));
const generateEntityCode = ({ outdir, entityName, entity, }) => {
    (0, createDir_1.default)(path_1.default.join(outdir, entityName));
    generations_1.default.forEach((geneartion) => geneartion({
        outdir,
        entityName,
        entity,
    }));
};
exports.default = generateEntityCode;
//# sourceMappingURL=generateEntityCode.js.map