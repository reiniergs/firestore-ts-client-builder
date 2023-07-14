import path from 'path';
import createDir from '../../fs/createDir';
import { GenerateEntityProps } from '../types';
import { entityCode } from '../generations';

const generateEntityCode = ({
    outdir,
    entityName,
    entity,
    parents = [],
}: GenerateEntityProps) => {
    createDir(path.join(outdir, entityName));
    entityCode.forEach((generation) => generation({
        outdir,
        entityName,
        entity,
        parents,
    }));
};

export default generateEntityCode;
