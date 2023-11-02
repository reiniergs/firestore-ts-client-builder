import * as fs from 'fs';
import generateTypes from '../generateTypes';
import { GenerateEntityProps } from '../../types';

jest.mock('fs', () => {
    const original = jest.requireActual("fs");
    return {
        ...original,
        writeFileSync: jest.fn(),
    };
});
const writeFileSyncMock = fs.writeFileSync as jest.MockedFunction<typeof fs.writeFileSync>;

describe('generateTypes', () => {
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
            }
        } as any)
        const expected = `import { BaseEntity } from "../types";

export interface Custom extends BaseEntity {
  id: string;
  customArray?: Array<CustomType | undefined>;
}
`;
        const actual = writeFileSyncMock.mock.calls[0][1];
        expect(actual).toEqual(expected);
    });
});