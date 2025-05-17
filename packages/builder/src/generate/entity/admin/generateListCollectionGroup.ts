import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from '../../types';
import generate from '../../generate';

const generateListCollectionGroup = (props: GenerateEntityProps) => {
    const { outdir, entityName, parents } = props;
    generate({
        templatePath: path.join(__dirname, '../../../templates/entity/admin/listCollectionGroup.hbs'),
        targetPath: path.join(outdir, entityName, 'listCollectionGroup.ts'),
        data: {
            entityName,
            entityInterface: capitalize(entityName),
            parents,
        },
    });
};

export default generateListCollectionGroup;
