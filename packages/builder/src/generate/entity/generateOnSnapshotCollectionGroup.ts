import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from '../types';
import generate from '../generate';

const generateOnSnapshotCollectionGroup = (props: GenerateEntityProps) => {
    const { outdir, entityName, parents } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/entity/onSnapshotCollectionGroup.hbs'),
        targetPath: path.join(outdir, entityName, 'onSnapshotCollectionGroup.ts'),
        data: {
            entityName,
            entityInterface: capitalize(entityName),
            parents,
        },
    });
};

export default generateOnSnapshotCollectionGroup;
