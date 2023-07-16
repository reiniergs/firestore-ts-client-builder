import { AdminDataLayerProps } from './types';
import copyGenerics from './fs/copyGenerics';
import generateFirebaseAdmin from './generate/generic/generateFirebaseAdmin';
import generateAdminEntityCode from './generate/entity/admin/generateEntityCode';
import prepareDir from './fs/prepareDir';
import generateEntitiesCode from './generate/generateEntitiesCode';

const createAdminDataLayer = (props: AdminDataLayerProps) => {
    const { outdir, metadata, firebaseAdminConfig } = props;
    prepareDir(outdir);
    copyGenerics(outdir, 'admin');

    generateFirebaseAdmin({ outdir, firebaseAdminConfig });

    generateEntitiesCode({
        outdir,
        entities: metadata.entities,
        generator: generateAdminEntityCode,
    });
};

export default createAdminDataLayer;
