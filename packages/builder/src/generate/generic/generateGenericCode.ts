import { GenerateGenericCode } from '../types';
import { CustomTypes } from '../../types';
import { genericCode } from '../generations';

const generateGenericCode = <T extends CustomTypes = {}>({
    outdir,
    metadata,
}: GenerateGenericCode<T>) => {
    genericCode.forEach((generation) => generation({
        outdir,
        metadata,
    }));
};

export default generateGenericCode;
