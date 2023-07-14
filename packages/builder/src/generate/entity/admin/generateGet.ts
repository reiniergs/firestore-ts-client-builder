import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from '../../types';
import generate from '../../generate';

const generateGet = (props: GenerateEntityProps) => {
    const { outdir, entityName, parents } = props;
    generate({
        templatePath: path.join(__dirname, '../../../templates/entity/admin/get.hbs'),
        targetPath: path.join(outdir, entityName, 'get.ts'),
        data: {
            entityName,
            entityInterface: capitalize(entityName),
            parents,
        },
    });
};

export default generateGet;
