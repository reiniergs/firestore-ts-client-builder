import {
    CustomTypes,
    Property,
    PropertyTypeObject,
    PropertyTypeOneOf,
} from '../types';

const builtInTypes = ['string', 'boolean', 'date', 'number', 'array', 'oneOf'];

const getCustomTypes = <T extends CustomTypes = {}>(
    properties: Record<string, Property<T>>,
): Array<string> => {
    const typesSet = Object.keys(properties).reduce((acc, key) => {
        const property = properties[key];
        mergeSets(acc, getTypesFromProperty(property));
        return acc;
    }, new Set<string>());
    return Array.from(typesSet);
};

// Helper function to merge two sets
const mergeSets = (target: Set<string>, source: Set<string>): void => {
    source.forEach((item) => target.add(item));
};

const getTypesFromProperty = (property: Property<any>): Set<string> => {
    const result = new Set<string>();

    if (property.type === 'object') {
        // For objects, process their nested properties.
        const { properties: subProperties } = property as PropertyTypeObject<{}>;
        mergeSets(result, new Set(getCustomTypes(subProperties)));
    } else if (property.type === 'array' && 'items' in property) {
        // Process array items.
        const itemsType = property.items.type;
        if (itemsType === 'object') {
            const { properties: subProperties } =
                property.items as PropertyTypeObject<{}>;
            mergeSets(result, new Set(getCustomTypes(subProperties)));
        } else if (!builtInTypes.includes(itemsType as string)) {
            result.add(itemsType as string);
        }
    } else if (property.type === 'oneOf') {
        // Process all variants in a oneOf.
        const { variants } = property as PropertyTypeOneOf<{}>;
        variants.forEach((variant) => {
            mergeSets(result, getTypesFromProperty(variant));
        });
    } else if (!builtInTypes.includes(property.type as string)) {
        // Add custom types.
        result.add(property.type as string);
    }

    return result;
};

export default getCustomTypes;
