import { Endpoints, Server, CustomTypes } from '../types';
import { GenerateEndpointProps } from './types';

interface GenerateEnpointsCodeProps<T extends CustomTypes = {}> {
    outdir: string;
    endpoints: Endpoints<T>;
    generator: (params: GenerateEndpointProps<T>) => void;
    server: Server;
}

const generateEndpointsCode = <T extends CustomTypes = {}>({
    endpoints, outdir, generator, server,
}: GenerateEnpointsCodeProps<T>) => {
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
