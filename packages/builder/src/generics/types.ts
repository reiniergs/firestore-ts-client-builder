import { CollectionReference, Query, Unsubscribe } from "firebase/firestore";

export interface BaseEntity {
    id: string;
}

export type ListQueryFn = (ref: CollectionReference) => Query;
export interface ListServiceOpts {
    listQueryFn?: ListQueryFn;
}

export type GetService<T> = (id: string) => Promise<T | null>;
export type AddService<T> = (doc: Omit<T, "id">) => Promise<T>;
export type SetService<T> = (id: string, doc: Omit<T, "id">) => Promise<T>;
export type UpdateService<T> = (
    id: string,
    doc: Partial<Omit<T, "id">>
) => Promise<void>;
export type RemoveService = (id: string) => Promise<void>;
export type ListService<T> = (opts?: ListServiceOpts) => Promise<Array<T>>;
export type OnSnapshotDocService<T> = (id: string, callback: (doc: T) => void) => Unsubscribe;
export type OnSnapshotCollectionService<T> = (opts: ListServiceOpts, callback: (docs: Array<T>) => void) => Unsubscribe;
export interface Page<T> {
    docs: T[];
    count: number;
    firstDocId: string | null;
    lastDocId: string | null;
}
export interface PaginateServiceOpts extends ListServiceOpts {
    direction?: "forward" | "backward";
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
export interface HookReturn<T> {
    data: T | undefined;
    isLoading: boolean;
}
export type UseDocHook<T> = (id: string, opts?: HookOpts) => HookReturn<T>;
export type UseConllectionHook<T> = (opts?: HookCollectionOpts<T>) => HookReturn<Array<T>>;
