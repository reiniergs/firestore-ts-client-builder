import { ClientDataLayerProps, CustomTypes } from './types';
import copyGenerics from './fs/copyGenerics';
import generateFirebase from './generate/generic/generateFirebase';
import generateGenericCode from './generate/generic/generateGenericCode';
import generateEntityCode from './generate/entity/generateEntityCode';
import prepareDir from './fs/prepareDir';
import generateEntitiesCode from './generate/generateEntitiesCode';

import generateEndpointsCode from './generate/generateEndpointsCode';
import endpointCodeGenerator from './generate/endpoint/generator';

const createClientDataLayer = <T extends CustomTypes = {}>(props: ClientDataLayerProps<T>) => {
    const {
        outdir, metadata, firebaseConfig, firestoreConfig,
    } = props;
    prepareDir(outdir);
    copyGenerics(outdir, 'client');

    generateFirebase({ outdir, firebaseConfig, firestoreConfig });
    generateGenericCode({ outdir, metadata });

    generateEntitiesCode({
        outdir,
        entities: metadata.entities,
        generator: generateEntityCode,
    });

    generateEndpointsCode({
        outdir,
        endpoints: metadata.endpoints,
        generator: endpointCodeGenerator,
        server: metadata.server,
    });
};

export default createClientDataLayer;
