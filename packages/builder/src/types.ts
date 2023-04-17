export type PropertyType =
  | 'number'
  | 'string'
  | 'date'
  | 'array'
  | 'object'
  | 'boolean'
  | 'reference'
  | 'enum';

export interface BaseProperty {
    type: PropertyType;
    isRequired?: boolean;
    isNullable?: boolean;
}

export interface PropertyTypeObject extends BaseProperty {
    type: 'object';
    properties: Record<string, Property>;
}

export interface PropertyTypeArray extends BaseProperty {
    type: 'array';
    items: Property;
}

export interface PropertyTypeString extends BaseProperty {
    enum: Array<string>;
}

export type Property = BaseProperty | PropertyTypeString | PropertyTypeObject | PropertyTypeArray;

export interface Entity {
    properties: Record<string, Property>;
}

type Protocol = 'http' | 'https';
type Domain = `${string}.${string}`;
type Path = `/${string}`;
type BasicURL = `${Protocol}://${Domain}${Path}` | `${Protocol}://${Domain}`;

export interface Server {
    url: BasicURL;
}

export interface DataModelMetadata {
    entities: Record<string, Entity>;
    server: Server;
}

export interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

export interface ClientDataLayerProps {
    outdir: string;
    metadata: DataModelMetadata;
    firebaseConfig: FirebaseConfig;
}
