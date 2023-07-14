import path from 'path';
import { ClientDataLayerProps, AdminDataLayerProps, Entity } from './types';
import removeDir from './fs/removeDir';
import createDir from './fs/createDir';
import copyGenerics from './fs/copyGenerics';
import generateFirebase from './generate/generic/generateFirebase';
import generateGenericCode from './generate/generic/generateGenericCode';
import generateFirebaseAdmin from './generate/generic/generateFirebaseAdmin';
import generateEntityCode from './generate/entity/generateEntityCode';
import generateAdminEntityCode from './generate/entity/admin/generateEntityCode';
import { GenerateEntityProps } from './generate/types';

const prepareDir = (outdir: string) => {
    removeDir(outdir);
    createDir(outdir);
};

interface GenerateEntitiesCodeProps {
    outdir: string;
    entities: Record<string, Entity>;
    parents?: string[];
    generator: (params: GenerateEntityProps) => void;
}

const generateEntitiesCode = ({
    entities, outdir, parents = [], generator,
}: GenerateEntitiesCodeProps) => {
    Object.keys(entities).forEach((entityName) => {
        generator({
            outdir,
            entityName,
            entity: entities[entityName],
            parents,
        });
        if (entities[entityName].subcollections) {
            parents.push(entityName);
            generateEntitiesCode({
                outdir: path.join(outdir, entityName),
                entities: entities[entityName].subcollections,
                parents,
                generator,
            });
            parents.pop();
        }
    });
};

export const createClientDataLayer = (props: ClientDataLayerProps) => {
    const { outdir, metadata, firebaseConfig } = props;
    prepareDir(outdir);
    copyGenerics(outdir, 'client');

    generateFirebase({ outdir, firebaseConfig });
    generateGenericCode({ outdir, metadata });

    generateEntitiesCode({
        outdir,
        entities: metadata.entities,
        generator: generateEntityCode,
    });
};

export const createAdminDataLayer = (props: AdminDataLayerProps) => {
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
