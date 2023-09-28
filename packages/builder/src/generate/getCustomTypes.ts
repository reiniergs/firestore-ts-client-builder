import {
    CustomTypes, Property, PropertyTypeObject,
} from '../types';

const getCustomTypes = <T extends CustomTypes = {}>(
    properties: Record<string, Property<T>>,
): Array<string> => {
    const typesSet = Object.keys(properties)
        .reduce((acc: Set<string>, key: string): Set<string> => {
            const property = properties[key];
            if (property.type === 'object') {
                const { properties: subProperties } = property as PropertyTypeObject<{}>;
                return new Set([
                    ...Array.from(acc),
                    ...Array.from(getCustomTypes(subProperties)),
                ]);
            }
            if (property.type === 'array' && 'items' in property && property.items.type === 'object') {
                const { properties: subProperties } = property.items as PropertyTypeObject<{}>;
                return new Set([
                    ...Array.from(acc),
                    ...Array.from(getCustomTypes(subProperties)),
                ]);
            }
            if (
                ['string', 'boolean', 'date', 'number'].indexOf(property.type as string) === -1
            ) {
                return acc.add(property.type as string);
            }
            return acc;
        }, new Set<string>());
    return Array.from(typesSet);
};

export default getCustomTypes;
