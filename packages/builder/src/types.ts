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

export interface FirebaseAdminConfig {
    /**
     * The URL of the Realtime Database from which to read and write data.
     */
    databaseURL?: string;
    /**
     * The ID of the service account to be used for signing custom tokens. This
     * can be found in the `client_email` field of a service account JSON file.
     */
    serviceAccountId?: string;
    /**
     * The name of the Google Cloud Storage bucket used for storing application data.
     * Use only the bucket name without any prefixes or additions (do *not* prefix
     * the name with "gs://").
     */
    storageBucket?: string;
    /**
     * The ID of the Google Cloud project associated with the App.
     */
    projectId?: string;
}

export interface DataLayerProps {
    outdir: string;
    metadata: DataModelMetadata;
}

export interface ClientDataLayerProps extends DataLayerProps {
    firebaseConfig?: FirebaseConfig;
}

export interface AdminDataLayerProps extends DataLayerProps {
    firebaseAdminConfig?: FirebaseAdminConfig;
}
