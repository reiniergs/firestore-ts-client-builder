/* eslint-disable import/prefer-default-export */
import { ClientDataLayerProps } from './types';
import generateEntityCode from './generate/entity/generateEntityCode';
import removeDir from './fs/removeDir';
import createDir from './fs/createDir';
import copyGenerics from './fs/copyGenerics';
import generateFirebase from './generate/generic/generateFirebase';
import generateGenericCode from './generate/generic/generateGenericCode';

export const createClientDataLayer = (props: ClientDataLayerProps) => {
    const { outdir, metadata, firebaseConfig } = props;
    removeDir(outdir);
    createDir(outdir);

    copyGenerics(outdir);
    generateFirebase({ outdir, firebaseConfig });
    generateGenericCode({ outdir, metadata });

    Object.keys(metadata.entities).forEach((entityName) => {
        generateEntityCode({
            outdir,
            entityName,
            entity: metadata.entities[entityName],
        });
    });
};
