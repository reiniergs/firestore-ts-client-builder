export type PropertyType =
  | "number"
  | "string"
  | "date"
  | "array"
  | "object"
  | "boolean"
  | "reference";

export interface BaseProperty {
  type: PropertyType;
  isRequired?: boolean;
  isNullable?: boolean;
}

export interface PropertyTypeObject extends BaseProperty {
  type: "object";
  properties: Record<string, Property>;
}

export interface PropertyTypeArray extends BaseProperty {
  type: "array";
  items: Property;
}

export type Property = BaseProperty | PropertyTypeObject | PropertyTypeArray;

export interface Entity {
  properties: Record<string, Property>;
}

export interface DataModelMetadata {
  entities: Record<string, Entity>;
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
