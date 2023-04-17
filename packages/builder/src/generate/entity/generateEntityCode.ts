import path from 'path';
import createDir from '../../fs/createDir';
import { GenerateEntityProps } from '../types';
import { entityCode } from '../generations';

const generateEntityCode = ({
    outdir,
    entityName,
    entity,
}: GenerateEntityProps) => {
    createDir(path.join(outdir, entityName));
    entityCode.forEach((generation) => generation({
        outdir,
        entityName,
        entity,
    }));
};

export default generateEntityCode;
