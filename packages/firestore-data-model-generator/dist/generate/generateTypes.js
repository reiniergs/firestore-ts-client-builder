"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const capitalize_1 = __importDefault(require("lodash/capitalize"));
const generate_1 = __importDefault(require("./generate"));
const formatProperties = (properties) => {
    const formatProperty = (name, property) => {
        const { type, isNullable, isRequired } = property;
        switch (type) {
            case "string":
            case "number":
            case "boolean":
                return {
                    name,
                    type,
                    isRequired,
                    isNullable,
                };
            case "object":
                return {
                    name,
                    type,
                    isRequired,
                    isNullable,
                    properties: formatProperties(property.properties),
                };
            case "array":
                return {
                    name,
                    type,
                    isRequired,
                    isNullable,
                    items: formatProperty(name, property.items),
                };
        }
    };
    return Object.keys(properties).map((propName) => formatProperty(propName, properties[propName]));
};
const generateTypes = (props) => {
    const { outdir, entityName, entity } = props;
    (0, generate_1.default)({
        templatePath: path_1.default.join(__dirname, "../templates/entity/types.hbs"),
        targetPath: path_1.default.join(outdir, entityName, "types.ts"),
        data: {
            entityInterface: (0, capitalize_1.default)(entityName),
            properties: formatProperties(entity.properties),
        },
    });
};
exports.default = generateTypes;
//# sourceMappingURL=generateTypes.js.map