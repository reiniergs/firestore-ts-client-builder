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

export const processTimestampFields = <T>(obj: object): T => {
    const res = Object.keys(obj).reduce((acc, key) => {
        if (obj[key] instanceof Timestamp) {
            acc[key] = transformTimestamp(obj[key]);
        } else {
            acc[key] = obj[key];
        }
        return acc;
    }, {}) as T;    
    return res;
}
