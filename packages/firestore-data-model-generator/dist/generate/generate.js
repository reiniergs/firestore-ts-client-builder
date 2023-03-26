"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const prettier_1 = __importDefault(require("prettier"));
const path_1 = __importDefault(require("path"));
handlebars_1.default.registerHelper("eq", (arg1, arg2) => arg1 === arg2);
handlebars_1.default.registerPartial("properties", fs_1.default
    .readFileSync(path_1.default.join(__dirname, "../templates/partials/properties.hbs"))
    .toString());
const generate = (props) => {
    const { templatePath, targetPath, data } = props;
    const templateStr = fs_1.default.readFileSync(templatePath).toString();
    const template = handlebars_1.default.compile(templateStr);
    const content = template(data);
    fs_1.default.writeFileSync(targetPath, prettier_1.default.format(content, { parser: "typescript" }));
};
exports.default = generate;
//# sourceMappingURL=generate.js.map