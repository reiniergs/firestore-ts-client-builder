/* eslint-disable consistent-return, default-case */
import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from '../../types';
import generate from '../../generate';
import formatProperties from '../../formatProperties';

const generateTypes = (props: GenerateEntityProps) => {
    const {
        outdir, entityName, entity, parents = [],
    } = props;
    generate({
        templatePath: path.join(__dirname, '../../../templates/entity/admin/types.hbs'),
        targetPath: path.join(outdir, entityName, 'types.ts'),
        data: {
            entityInterface: capitalize(entityName),
            properties: formatProperties(entity.properties),
            parents,
        },
    });
};

export default generateTypes;
