import { Timestamp } from 'firebase-admin/firestore';
import { EntityServerMetadata } from './types';

export const transformTimestamp = (date: Timestamp) => {
    if (date) {
        return date.toDate();
    }
    return new Date(NaN);
}

export const transformMetadata = <T extends EntityServerMetadata>(doc: T) => {
    const { createdAt, updatedAt, ...data } = doc;
    return {
        ...data,
        createdAt: transformTimestamp(createdAt),
        updatedAt: transformTimestamp(updatedAt),
    }
}

export const processTimestampFields = <T extends Record<string, unknown>>(obj: T): T => {
    const res = Object.keys(obj).reduce((acc, key) => {
        const value = obj[key];
        if (value instanceof Timestamp) {
            acc[key] = transformTimestamp(value);
        } else {
            acc[key] = obj[key];
        }
        return acc;
    }, {} as Record<string, unknown>) as T;    
    return res;
}
