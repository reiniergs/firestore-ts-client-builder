"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const generate_1 = __importDefault(require("./generate"));
const generateFirebase = (props) => {
    const { outdir, firebaseConfig } = props;
    (0, generate_1.default)({
        templatePath: path_1.default.join(__dirname, "../templates/firebase.hbs"),
        targetPath: path_1.default.join(outdir, "firebase.ts"),
        data: {
            firebaseConfig: Object.keys(firebaseConfig).map((name) => {
                return { name, value: firebaseConfig[name] };
            }),
        },
    });
};
exports.default = generateFirebase;
//# sourceMappingURL=generateFirebase.js.map