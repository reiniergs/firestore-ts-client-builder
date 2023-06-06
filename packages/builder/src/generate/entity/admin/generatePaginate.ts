import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from '../../types';
import generate from '../../generate';

const generatePaginate = (props: GenerateEntityProps) => {
    const { outdir, entityName } = props;
    generate({
        templatePath: path.join(__dirname, '../../../templates/entity/admin/paginate.hbs'),
        targetPath: path.join(outdir, entityName, 'paginate.ts'),
        data: {
            entityName,
            entityInterface: capitalize(entityName),
        },
    });
};

export default generatePaginate;
