import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from '../types';
import generate from '../generate';
import formatProperties from '../formatProperties';
import getCustomTypes from '../getCustomTypes';

const generateTypes = (props: GenerateEntityProps) => {
    const {
        outdir, entityName, entity, parents = [],
    } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/entity/types.hbs'),
        targetPath: path.join(outdir, entityName, 'types.ts'),
        data: {
            entityInterface: capitalize(entityName),
            properties: formatProperties(entity.properties),
            parents,
            customTypes: getCustomTypes(entity.properties),
        },
    });
};

export default generateTypes;
