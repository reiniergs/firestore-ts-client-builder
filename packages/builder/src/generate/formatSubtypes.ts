import capitalize from 'lodash/capitalize';
import { Entity } from '../types';
import formatProperties from './formatProperties';

const formatSubtypes = (subtypes: Entity<{}>['subtypes'] = {}) => Object.entries(subtypes || {}).map(([subtypeName, subtype]) => ({
    name: capitalize(subtypeName),
    type: subtypeName,
    properties: formatProperties(subtype.properties),
}));

export default formatSubtypes;
