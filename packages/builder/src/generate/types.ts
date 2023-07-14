import { Entity, DataModelMetadata } from '../types';

export interface GenerateEntityProps {
    outdir: string;
    entityName: string;
    entity: Entity;
    parents?: string[];
}

export interface GenerateGenericCode {
    outdir: string;
    metadata: DataModelMetadata;
}
