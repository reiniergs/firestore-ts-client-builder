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