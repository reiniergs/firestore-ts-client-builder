import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from '../types';
import generate from '../generate';

const generateUseCollectionGroup = (props: GenerateEntityProps) => {
    const { outdir, entityName, parents } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/entity/useCollectionGroup.hbs'),
        targetPath: path.join(outdir, entityName, 'useCollectionGroup.ts'),
        data: {
            entityName,
            entityInterface: capitalize(entityName),
            parents,
        },
    });
};

export default generateUseCollectionGroup;
