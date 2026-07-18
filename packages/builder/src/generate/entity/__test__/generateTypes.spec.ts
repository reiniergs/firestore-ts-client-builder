import * as fs from 'fs';
import generateTypes from '../generateTypes';

jest.mock('fs', () => {
    const original = jest.requireActual('fs');
    return {
        ...original,
        writeFileSync: jest.fn(),
    };
});
const writeFileSyncMock = fs.writeFileSync as jest.MockedFunction<typeof fs.writeFileSync>;

describe('generateTypes', () => {
    beforeEach(() => {
        writeFileSyncMock.mockClear();
    });

    it('should generate correct type for an array of custom type', () => {
        generateTypes({
            entityName: 'Custom',
            outdir: 'src',
            parents: [],
            entity: {
                properties: {
                    customArray: {
                        type: 'array',
                        items: { type: 'CustomType' },
                    },
                },
            },
        } as any);
        const expected = `import { BaseEntity } from "../types";
import { CustomType } from "../globals";

interface BaseCustom extends BaseEntity {
  id: string;
  customArray?: Array<CustomType | undefined>;
}

export type Custom = BaseCustom;
`;
        const actual = writeFileSyncMock.mock.calls[0][1];
        expect(actual).toEqual(expected);
    });

    it('should emit | null for nullable object properties', () => {
        generateTypes({
            entityName: 'Policy',
            outdir: 'src',
            parents: [],
            entity: {
                properties: {
                    risk: {
                        type: 'object',
                        isRequired: true,
                        properties: {
                            dwelling: {
                                type: 'object',
                                isRequired: true,
                                isNullable: true,
                                properties: {
                                    constructionType: {
                                        type: 'string',
                                        isRequired: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        } as any);

        const actual = writeFileSyncMock.mock.calls[0][1] as string;
        expect(actual).toContain('dwelling: {');
        expect(actual).toContain('constructionType: string;');
        expect(actual).toMatch(/}\s*\|\s*null/);
    });
});
