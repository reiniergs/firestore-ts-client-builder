import { Property } from '../../types';
import getCustomTypes from '../getCustomTypes';

describe('getCustomTypes', () => {
    it('should return custom types correctly', () => {
        const properties: Record<string, Property<{
            customType1: { type: 'string' },
            nestedCustom: { type: 'string' },
            deepNestedCustom: { type: 'string' },
            arrayItemCustom: { type: 'string' },
        }>> = {
            name: { type: 'string' },
            age: { type: 'number' },
            isActive: { type: 'boolean' },
            birthDate: { type: 'date' },
            customType1: { type: 'customType1' },
            nestedObj: {
                type: 'object',
                properties: {
                    nestedCustom: { type: 'nestedCustom' },
                    anotherNested: {
                        type: 'object',
                        properties: {
                            deepNestedCustom: { type: 'deepNestedCustom' },
                        },
                    },
                },
            },
            arrayOfObjects: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        arrayItemCustom: { type: 'arrayItemCustom' },
                    },
                },
            },
        };

        const result = getCustomTypes(properties);
        const expected = ['customType1', 'nestedCustom', 'deepNestedCustom', 'arrayItemCustom'];

        expect(result).toEqual(expect.arrayContaining(expected));
        expect(result.length).toEqual(expected.length);
    });
    it('should return empty array if no custom types', () => {
        const properties: Record<string, Property> = {
            name: { type: 'string' },
            age: { type: 'number' },
            isActive: { type: 'boolean' },
            birthDate: { type: 'date' },
        };

        const result = getCustomTypes(properties);

        expect(result).toEqual([]);
    });
    it('should return empty array if no properties', () => {
        const properties: Record<string, Property> = {};

        const result = getCustomTypes(properties);

        expect(result).toEqual([]);
    });
    it('should have no duplicates', () => {
        const properties: Record<string, Property<{
            customType1: { type: 'string' },
            nestedCustom: { type: 'string' },
        }>> = {
            name: { type: 'string' },
            age: { type: 'number' },
            isActive: { type: 'boolean' },
            birthDate: { type: 'date' },
            customType1: { type: 'customType1' },
            nestedObj: {
                type: 'object',
                properties: {
                    nestedCustom: { type: 'nestedCustom' },
                    anotherNested: {
                        type: 'object',
                        properties: {
                            deepNestedCustom: { type: 'customType1' },
                        },
                    },
                },
            },
            arrayOfObjects: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        arrayItemCustom: { type: 'nestedCustom' },
                    },
                },
            },
        };

        const result = getCustomTypes(properties);
        const expected = ['customType1', 'nestedCustom'];
        expect(result).toEqual(expect.arrayContaining(expected));
        expect(result.length).toEqual(expected.length);
    });
    it('should return custom types correctly with nested arrays', () => {
        const properties: Record<string, Property<{
            customType: { type: 'string' },
        }>> = {
            name: { type: 'string' },
            age: { type: 'number' },
            customType1: { type: 'customType' },
            list: { type: 'array', items: { type: 'string' } },
        };

        const result = getCustomTypes(properties);
        const expected = ['customType'];

        expect(result).toEqual(expect.arrayContaining(expected));
        expect(result.length).toEqual(expected.length);
    });
});
