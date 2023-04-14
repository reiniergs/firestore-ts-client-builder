import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from './types';
import generate from './generate';

const generateUpdate = (props: GenerateEntityProps) => {
    const { outdir, entityName } = props;
    generate({
        templatePath: path.join(__dirname, '../templates/entity/update.hbs'),
        targetPath: path.join(outdir, entityName, 'update.ts'),
        data: {
            entityName,
            entityInterface: capitalize(entityName),
        },
    });
};

export default generateUpdate;
