/* eslint-disable consistent-return, default-case */
import {
    Property,
    PropertyTypeArray,
    PropertyTypeObject,
    PropertyTypeString,
    CustomTypes,
} from '../types';

const formatEnum = (enumValues: Array<string>) => {
    if (Array.isArray(enumValues)) {
        return enumValues
            .map((value) => `'${value}'`)
            .join('|');
    }
    return undefined;
};

const formatProperties = <T extends CustomTypes = {}>(properties: Record<string, Property<T>>) => {
    const formatProperty = (name: string, property: Property<T>) => {
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
                        (property as PropertyTypeObject<T>).properties,
                    ),
                };
            case 'array':
                return {
                    name,
                    type,
                    isRequired,
                    isNullable,
                    items: formatProperty(name, (property as PropertyTypeArray<T>).items),
                };
            case 'string':
                return {
                    name,
                    type,
                    isRequired,
                    isNullable,
                    enum: formatEnum((property as PropertyTypeString<T>).enum),
                };
            case 'date':
                return {
                    name,
                    type: 'Date',
                    isRequired,
                    isNullable,
                };
            default:
                return {
                    name,
                    type,
                    isRequired,
                    isNullable,
                };
        }
    };
    return Object.keys(properties)
        .map((propName) => formatProperty(propName, properties[propName]));
};

export default formatProperties;
