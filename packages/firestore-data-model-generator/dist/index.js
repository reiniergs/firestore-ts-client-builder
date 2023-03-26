"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientDataLayer = void 0;
const generateEntityCode_1 = __importDefault(require("./generate/generateEntityCode"));
const removeDir_1 = __importDefault(require("./fs/removeDir"));
const createDir_1 = __importDefault(require("./fs/createDir"));
const copyGenerics_1 = __importDefault(require("./fs/copyGenerics"));
const generateFirebase_1 = __importDefault(require("./generate/generateFirebase"));
const createClientDataLayer = (props) => {
    const { outdir, metadata, firebaseConfig } = props;
    (0, removeDir_1.default)(outdir);
    (0, createDir_1.default)(outdir);
    (0, copyGenerics_1.default)(outdir);
    (0, generateFirebase_1.default)({ outdir, firebaseConfig });
    Object.keys(metadata.entities).forEach((entityName) => {
        (0, generateEntityCode_1.default)({
            outdir,
            entityName,
            entity: metadata.entities[entityName],
        });
    });
};
exports.createClientDataLayer = createClientDataLayer;
//# sourceMappingURL=index.js.map