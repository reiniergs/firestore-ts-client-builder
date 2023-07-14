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

