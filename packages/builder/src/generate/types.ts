import { Entity, DataModelMetadata } from '../types';

export interface GenerateEntityProps {
    outdir: string;
    entityName: string;
    entity: Entity;
}

export interface GenerateGenericCode {
    outdir: string;
    metadata: DataModelMetadata;
}
