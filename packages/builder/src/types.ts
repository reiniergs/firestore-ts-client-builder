export type BasicPropertyType =
  | 'number'
  | 'string'
  | 'date'
  | 'array'
  | 'object'
  | 'boolean';

export type CustomTypes = Record<string, Property>;

export type PropertyType<T extends CustomTypes> = BasicPropertyType | keyof T;

export interface BaseProperty<T extends CustomTypes> {
    type: PropertyType<T>;
    isRequired?: boolean;
    isNullable?: boolean;
}

export interface PropertyTypeObject<T extends CustomTypes> extends BaseProperty<T> {
    type: 'object';
    properties: Record<string, Property<T>>;
}

export interface PropertyTypeArray<T extends CustomTypes> extends BaseProperty<T> {
    type: 'array';
    items: Property<T>;
}

export interface PropertyTypeString<T extends CustomTypes> extends BaseProperty<T> {
    enum: Array<string>;
}

export type Property<T extends CustomTypes = {}> =
BaseProperty<T> | PropertyTypeString<T> | PropertyTypeObject<T> | PropertyTypeArray<T>;

export interface Entity<T extends CustomTypes> {
    properties: Record<string, Property<T>>;
    subcollections?: Record<string, Entity<T>>;
}

type Protocol = 'http' | 'https';
type Domain = `${string}.${string}`;
type Path = `/${string}`;
type BasicURL = `${Protocol}://${Domain}${Path}` | `${Protocol}://${Domain}`;

export interface Server {
    url: BasicURL;
}
export interface Endpoint<T extends CustomTypes = {}> {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: Path;
    hook: 'query' | 'mutation';
    requestBody?: Omit<Entity<T>, 'subcollections'>;
    successResponse: Omit<Entity<T>, 'subcollections'>;
}

export type Endpoints<T extends CustomTypes = {}> = Record<string, Record<string, Endpoint<T>>>;

export interface DataModelMetadata<T extends CustomTypes = {}> {
    entities: Record<string, Entity<T>>;
    endpoints?: Endpoints<T>;
    server: Server;
    types?: T;
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

export interface ClientDataLayerProps<T extends CustomTypes> {
    outdir: string;
    metadata: DataModelMetadata<T>;
    firebaseConfig?: FirebaseConfig;
}

export interface AdminDataLayerProps<T extends CustomTypes> {
    outdir: string;
    metadata: Pick<DataModelMetadata<T>, 'entities' | 'types'>;
    firebaseAdminConfig?: FirebaseAdminConfig;
}
