import { AdminDataLayerProps, CustomTypes } from './types';
import copyGenerics from './fs/copyGenerics';
import generateFirebaseAdmin from './generate/generic/generateFirebaseAdmin';
import generateAdminEntityCode from './generate/entity/admin/generateEntityCode';
import prepareDir from './fs/prepareDir';
import generateEntitiesCode from './generate/generateEntitiesCode';
import generateGlobalTypes from './generate/generic/generateGlobalTypes';

const createAdminDataLayer = <T extends CustomTypes = {}>(props: AdminDataLayerProps<T>) => {
    const {
        outdir, metadata, firebaseAdminConfig, applicationCredentials, appName,
    } = props;
    prepareDir(outdir);
    copyGenerics(outdir, 'admin');

    generateFirebaseAdmin({
        outdir, firebaseAdminConfig, applicationCredentials, appName,
    });
    generateGlobalTypes({ outdir, metadata });
    generateEntitiesCode({
        outdir,
        entities: metadata.entities,
        generator: generateAdminEntityCode,
    });
};

export default createAdminDataLayer;
