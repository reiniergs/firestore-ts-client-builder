import path from 'path';
import createDir from '../../../fs/createDir';
import { GenerateEntityProps } from '../../types';
import { adminEntityCode } from '../../generations';

const generateEntityCode = ({
    outdir,
    entityName,
    entity,
    parents,
}: GenerateEntityProps) => {
    createDir(path.join(outdir, entityName));
    adminEntityCode.forEach((generation) => generation({
        outdir,
        entityName,
        entity,
        parents,
    }));
};

export default generateEntityCode;
