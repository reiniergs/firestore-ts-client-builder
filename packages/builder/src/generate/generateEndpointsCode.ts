import { Endpoints, Server } from '../types';
import { GenerateEndpointProps } from './types';

interface GenerateEnpointsCodeProps {
    outdir: string;
    endpoints: Endpoints;
    generator: (params: GenerateEndpointProps) => void;
    server: Server;
}

const generateEndpointsCode = ({
    endpoints, outdir, generator, server,
}: GenerateEnpointsCodeProps) => {
    if (endpoints) {
        Object.keys(endpoints).forEach((entityName: string) => {
            Object.keys(endpoints[entityName]).forEach((endpointName: string) => {
                generator({
                    outdir,
                    entityName,
                    endpointName,
                    endpoint: endpoints[entityName][endpointName],
                    server,
                });
            });
        });
    }
};

export default generateEndpointsCode;
