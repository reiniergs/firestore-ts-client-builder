/* eslint-disable consistent-return, default-case */
import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from '../../types';
import generate from '../../generate';
import {
    Property,
    PropertyTypeArray,
    PropertyTypeObject,
    PropertyTypeString,
} from '../../../types';

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
        }
    };
    return Object.keys(properties)
        .map((propName) => formatProperty(propName, properties[propName]));
};

const generateTypes = (props: GenerateEntityProps) => {
    const { outdir, entityName, entity } = props;
    generate({
        templatePath: path.join(__dirname, '../../../templates/entity/admin/types.hbs'),
        targetPath: path.join(outdir, entityName, 'types.ts'),
        data: {
            entityInterface: capitalize(entityName),
            properties: formatProperties(entity.properties),
        },
    });
};

export default generateTypes;
