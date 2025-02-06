import upperFirst from 'lodash/upperFirst';
import kebabCase from 'lodash/kebabCase';
import { Entity } from '../types';
import formatProperties from './formatProperties';

const formatSubtypes = (subtypes: Entity<{}>['subtypes'] = {}) => Object.entries(subtypes || {}).map(([subtypeName, subtype]) => ({
    name: upperFirst(subtypeName),
    type: kebabCase(subtypeName),
    properties: formatProperties(subtype.properties),
}));

export default formatSubtypes;
