import { GenerateGenericCode } from '../types';
import { genericCode } from '../generations';

const generateGenericCode = ({
    outdir,
    metadata,
}: GenerateGenericCode) => {
    genericCode.forEach((generation) => generation({
        outdir,
        metadata,
    }));
};

export default generateGenericCode;
