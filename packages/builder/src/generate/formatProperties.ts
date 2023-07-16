/* eslint-disable consistent-return, default-case */
import {
    Property,
    PropertyTypeArray,
    PropertyTypeObject,
    PropertyTypeString,
} from '../types';

const formatEnum = (enumValues: Array<string>) => {
    if (Array.isArray(enumValues)) {
        return enumValues
            .map((value) => `'${value}'`)
            .join('|');
    }
    return undefined;
};

const formatProperties = (properties: Record<string, Property>) => {
    const formatProperty = (name: string, property: Property) => {
        const { type, isNullable, isRequired } = property;
        switch (type) {
            case 'number':
            case 'boolean':
                return {
                    name,
                    type,
                    isRequired,
                    isNullable,
                };
            case 'object':
                return {
                    name,
                    type,
                    isRequired,
                    isNullable,
                    properties: formatProperties(
                        (property as PropertyTypeObject).properties,
                    ),
                };
            case 'array':
                return {
                    name,
                    type,
                    isRequired,
                    isNullable,
                    items: formatProperty(name, (property as PropertyTypeArray).items),
                };
            case 'string':
                return {
                    name,
                    type,
                    isRequired,
                    isNullable,
                    enum: formatEnum((property as PropertyTypeString).enum),
                };
            case 'date':
                return {
                    name,
                    type: 'Date',
                    isRequired,
                    isNullable,
                };
        }
    };
    return Object.keys(properties)
        .map((propName) => formatProperty(propName, properties[propName]));
};

export default formatProperties;
