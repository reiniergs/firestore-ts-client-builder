import {
    Foo, OnlyString, Other, Bar,
} from '../data/globals';
import { Custom } from '../data/custom/types';

describe('Check globals are generate correctly', () => {
    it('should generate Foo as an enum', () => {
        const foo: Foo = 'foo';
        const bar: Foo = 'bar';
        // this dummy test is just to check that the type Foo is generated correctly
        expect(foo).toBe('foo');
        expect(bar).toBe('bar');
    });
    it('should generate OnlyString as an string', () => {
        const foo: OnlyString = 'whatever';
        // this dummy test is just to check that the type Foo is generated correctly
        expect(foo).toBe('whatever');
    });
    it('should generate Bar as an array of string', () => {
        const foo: Bar = ['hello', 'world'];
        // this dummy test is just to check that the type Foo is generated correctly
        expect(foo).toBeDefined();
    });
    it('should generate Other as an more complex object', () => {
        const foo: Other = {
            foo: 'required foo',
        };
        foo.bar = {
            foo: 'optional foo',
        };
        // this dummy test is just to check that the type Foo is generated correctly
        expect(foo).toEqual({
            foo: 'required foo',
            bar: {
                foo: 'optional foo',
            },
        });
    });
    it('use the custom type in the entities correctly', () => {
        const custom: Custom = {
            id: '123',
            foo: 'foo',
            bar: ['bar'],
            other: {
                foo: 'foo',
            },
            onlyString: 'onlyString',
        };
        custom.onlyString = null;
        custom.bar?.push('foo');
        expect(custom.other?.bar).toBeUndefined();
    });
});
