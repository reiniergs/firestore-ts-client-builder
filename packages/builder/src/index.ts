import { ClientDataLayerProps, AdminDataLayerProps } from './types';
import removeDir from './fs/removeDir';
import createDir from './fs/createDir';
import copyGenerics from './fs/copyGenerics';
import generateFirebase from './generate/generic/generateFirebase';
import generateGenericCode from './generate/generic/generateGenericCode';
import generateFirebaseAdmin from './generate/generic/generateFirebaseAdmin';
import generateEntityCode from './generate/entity/generateEntityCode';
import generateAdminEntityCode from './generate/entity/admin/generateEntityCode';

const prepareDir = (outdir: string) => {
    removeDir(outdir);
    createDir(outdir);
}

export const createClientDataLayer = (props: ClientDataLayerProps) => {
    const { outdir, metadata, firebaseConfig } = props;
    prepareDir(outdir);
    copyGenerics('client', outdir);

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

export const createAdminDataLayer = (props: AdminDataLayerProps) => {
    const { outdir, metadata, firebaseAdminConfig } = props;
    prepareDir(outdir);
    copyGenerics('admin', outdir);

    generateFirebaseAdmin({ outdir, firebaseAdminConfig });

    Object.keys(metadata.entities).forEach((entityName) => {
        generateAdminEntityCode({
            outdir,
            entityName,
            entity: metadata.entities[entityName],
        });
    });
};
