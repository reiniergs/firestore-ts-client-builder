import path from 'path';
import { GenerateEndpointProps } from '../types';
import generate from '../generate';
import formatProperties from '../formatProperties';
import extractParams from './utils/extractParams';

const generateTypes = (props: GenerateEndpointProps) => {
    const {
        outdir, endpoint,
    } = props;
    const requestBodyProperties = endpoint.requestBody
        ? formatProperties(endpoint.requestBody.properties)
        : null;
    generate({
        templatePath: path.join(__dirname, '../../templates/endpoint/types.hbs'),
        targetPath: path.join(outdir, 'types.ts'),
        data: {
            requestBodyProperties,
            successResponseProperties: formatProperties(endpoint.successResponse.properties),
            params: extractParams(endpoint.path),
            hook: endpoint.hook,
        },
    });
};

export default generateTypes;
