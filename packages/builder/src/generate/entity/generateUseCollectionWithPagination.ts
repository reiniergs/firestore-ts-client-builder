import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from '../types';
import generate from '../generate';

const generateUseCollectionWithPagination = (props: GenerateEntityProps) => {
    const { outdir, entityName } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/entity/useCollectionWithPagination.hbs'),
        targetPath: path.join(outdir, entityName, 'useCollectionWithPagination.ts'),
        data: {
            entityName,
            entityInterface: capitalize(entityName),
        },
    });
};

export default generateUseCollectionWithPagination;
