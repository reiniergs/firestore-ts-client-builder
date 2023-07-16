import {
    Entity, DataModelMetadata, Endpoint, Server,
} from '../types';

export interface GenerateEntityProps {
    outdir: string;
    entityName: string;
    entity: Entity;
    parents?: string[];
}

export interface GenerateEndpointProps {
    outdir: string;
    entityName: string;
    endpointName: string;
    endpoint: Endpoint;
    server: Server;
}

export interface GenerateGenericCode {
    outdir: string;
    metadata: DataModelMetadata;
}
