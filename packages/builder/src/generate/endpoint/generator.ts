import path from 'path';
import createDir from '../../fs/createDir';
import { GenerateEndpointProps } from '../types';
import { endpointCode } from '../generations';

const endpointCodeGenerator = ({
    outdir,
    entityName,
    endpointName,
    endpoint,
    server,
}: GenerateEndpointProps) => {
    const outdirPath = path.join(outdir, 'endpoints', entityName, endpointName);
    createDir(outdirPath);
    endpointCode.forEach((generation) => generation({
        outdir: outdirPath,
        entityName,
        endpointName,
        endpoint,
        server,
    }));
};

export default endpointCodeGenerator;
