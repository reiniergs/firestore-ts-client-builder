import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from '../types';
import generate from '../generate';

const generateList = (props: GenerateEntityProps) => {
    const { outdir, entityName, parents } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/entity/list.hbs'),
        targetPath: path.join(outdir, entityName, 'list.ts'),
        data: {
            entityName,
            entityInterface: capitalize(entityName),
            parents,
        },
    });
};

export default generateList;
