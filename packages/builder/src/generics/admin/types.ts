import { CollectionReference, Query, Timestamp } from 'firebase-admin/firestore'

export interface BaseEntity {
    id: string;
}
export interface EntityClientMetadata {
    createdAt: Date;
    updatedAt: Date;
}
export interface EntityServerMetadata {
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
export type EntityGet<T> = T & EntityClientMetadata;
export type EntityServerGet<T> = T & EntityServerMetadata;

export type ListQueryFn = (ref: CollectionReference) => Query;
export interface ListServiceOpts {
    listQueryFn?: ListQueryFn;
}
export type GetService<T> = (id: string) => Promise<T | null>;
export type AddService<T> = (doc: Omit<T, 'id'>) => Promise<EntityGet<T>>;
export type SetService<T> = (id: string, doc: Omit<T, 'id'>) => Promise<T>;
export type UpdateService<T> = (
    id: string,
    doc: Partial<Omit<T, 'id'>>
) => Promise<void>;
export type RemoveService = (id: string) => Promise<void>;
export type ListService<T> = (opts?: ListServiceOpts) => Promise<Array<T>>;
export type CountService = (opts?: ListServiceOpts) => Promise<number>;

export interface Page<T> {
    docs: T[];
    count: number;
    firstDocId: string | null;
    lastDocId: string | null;
}
export interface PaginateServiceOpts extends ListServiceOpts {
    direction?: 'forward' | 'backward';
    limit?: number;
    cursor?: string;
}
export type PaginateService<T> = (opts: PaginateServiceOpts) => Promise<Page<T>>;

// See https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;
