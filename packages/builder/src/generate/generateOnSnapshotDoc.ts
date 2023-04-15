import path from 'path';
import capitalize from 'lodash/capitalize';
import { GenerateEntityProps } from './types';
import generate from './generate';

const generateOnSnapshotDoc = (props: GenerateEntityProps) => {
    const { outdir, entityName } = props;
    generate({
        templatePath: path.join(__dirname, '../templates/entity/onSnapshotDoc.hbs'),
        targetPath: path.join(outdir, entityName, `onSnapshotDoc.ts`),
        data: {
            entityName,
            entityInterface: capitalize(entityName),
        },
    });
};

export default generateOnSnapshotDoc;