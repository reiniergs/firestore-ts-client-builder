export interface HookReturn<T> {
    data: T | undefined;
    isLoading: boolean;
}
export type UseDocHook<T> = (id: string) => HookReturn<T>;