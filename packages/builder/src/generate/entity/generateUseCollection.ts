import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from '../types';
import generate from '../generate';

const generateUseCollection = (props: GenerateEntityProps) => {
    const { outdir, entityName, parents } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/entity/useCollection.hbs'),
        targetPath: path.join(outdir, entityName, 'useCollection.ts'),
        data: {
            entityName,
            entityInterface: capitalize(entityName),
            parents,
        },
    });
};

export default generateUseCollection;
