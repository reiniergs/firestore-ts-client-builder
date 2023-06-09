import {
    CollectionReference, FirestoreError, Query, Timestamp, Unsubscribe,
} from 'firebase/firestore';

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
export type OnSnapshotDocService<T> = (
    id: string,
    callback: (doc: T) => void,
    onError?: (error: FirestoreError) => void
) => Unsubscribe;
export type OnSnapshotCollectionService<T> = (
    opts: ListServiceOpts,
    callback: (docs: Array<T>) => void
) => Unsubscribe;
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
export interface HookOpts {
    disabled?: boolean;
    track?: Array<string | number | boolean | undefined>;
}
export interface HookCollectionOpts<T> extends HookOpts, ListServiceOpts {
    onSnap?: (docs: Array<T>) => void;
}
export interface HookPaginatedCollectionOpts<T> extends HookCollectionOpts<T> {
    limit?: number;
}                                  
export interface HookReturnDoc<T> {
    data: T | null;
    isLoading: boolean;
}

export interface HookReturnCollection<T> {
    data: Array<T>;
    isLoading: boolean;
}

export interface HookReturnPageCollection<T> extends HookReturnCollection<T> {
    firstPage: boolean;
    hasMore: boolean; 
    totalRecords: number;
    prevPage: () => void;
    nextPage: () => void;
}  

export interface HookReturnCount {
    count: number | null;
    error: Error | null;
    isLoading: boolean;
}

export type UseDocHook<T> = (id: string, opts?: HookOpts) => HookReturnDoc<T>;
export type UseConllectionHook<T> = (opts?: HookCollectionOpts<T>) => HookReturnCollection<T>;
export type UsePaginatedCollectionHook<T> = (opts?: HookPaginatedCollectionOpts<T>) => HookReturnPageCollection<T>;
export type UseCountHook = (opts?: ListServiceOpts) => HookReturnCount;
export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
