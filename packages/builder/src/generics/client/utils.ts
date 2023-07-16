import { Timestamp, SnapshotMetadata } from 'firebase/firestore';
import { EntityServerMetadata } from './types';

export const transformTimestamp = (date: Timestamp) => {
    if (date) {
        return date.toDate();
    }
    return new Date(NaN);
}

export const transformMetadata = <T extends EntityServerMetadata>(doc: T, metadata?: SnapshotMetadata) => {
    const { createdAt, updatedAt, ...data } = doc;
    return {
        ...data,
        createdAt: metadata?.hasPendingWrites ? new Date() : transformTimestamp(createdAt),
        updatedAt: metadata?.hasPendingWrites ? new Date() :  transformTimestamp(updatedAt),
    }
}

export const processTimestampFields = <T>(obj: Record<string, unknown>): T => {
    const res = Object.keys(obj).reduce((acc: Record<string, unknown>, key: string) => {
        if (obj[key] instanceof Timestamp) {
            acc[key] = transformTimestamp(obj[key] as Timestamp);
        } else {
            acc[key] = obj[key];
        }
        return acc;
    }, {} as Record<string, unknown>) as T;    
    return res;
}

export const createPath = (path: string, params: Record<string, string>): string => {
    let result = path;
    for (const key in params) {
      result = result.replace(`{${key}}`, params[key]);
    }
    return result;
}

