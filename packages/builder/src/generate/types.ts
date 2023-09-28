import {
    Entity, DataModelMetadata, Endpoint, Server, CustomTypes,
} from '../types';

export interface GenerateEntityProps<T extends CustomTypes = {}> {
    outdir: string;
    entityName: string;
    entity: Entity<T>;
    parents?: string[];
}

export interface GenerateEndpointProps<T extends CustomTypes = {}> {
    outdir: string;
    entityName: string;
    endpointName: string;
    endpoint: Endpoint<T>;
    server: Server;
}

export interface GenerateGenericCode<T extends CustomTypes = {}> {
    outdir: string;
    metadata: DataModelMetadata<T>;
}
