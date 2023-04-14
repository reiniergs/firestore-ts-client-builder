import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from './types';
import generate from './generate';

const generateRemove = (props: GenerateEntityProps) => {
    const { outdir, entityName } = props;
    generate({
        templatePath: path.join(__dirname, '../templates/entity/remove.hbs'),
        targetPath: path.join(outdir, entityName, 'remove.ts'),
        data: {
            entityName,
            entityInterface: capitalize(entityName),
        },
    });
};

export default generateRemove;
