"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateGet_1 = __importDefault(require("./generateGet"));
const generateAdd_1 = __importDefault(require("./generateAdd"));
const generateTypes_1 = __importDefault(require("./generateTypes"));
const generateUpdate_1 = __importDefault(require("./generateUpdate"));
const generateRemove_1 = __importDefault(require("./generateRemove"));
const generateList_1 = __importDefault(require("./generateList"));
exports.default = [
    generateGet_1.default,
    generateAdd_1.default,
    generateUpdate_1.default,
    generateRemove_1.default,
    generateList_1.default,
    generateTypes_1.default,
];
//# sourceMappingURL=generations.js.map