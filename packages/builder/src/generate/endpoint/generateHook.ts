import path from 'path';
import { GenerateEndpointProps } from '../types';
import generate from '../generate';

const generateHook = (props: GenerateEndpointProps) => {
    const {
        outdir, endpoint,
    } = props;
    const hook = endpoint.hook === 'mutation' ? 'useMutation' : 'useQuery';
    generate({
        templatePath: path.join(__dirname, `../../templates/endpoint/${hook}.hbs`),
        targetPath: path.join(outdir, `${hook}.ts`),
        data: {
            method: endpoint.method,
            path: endpoint.path,
        },
    });
};

export default generateHook;
