import { Timestamp } from 'firebase/firestore';
import { EntityServerMetadata } from './types';

export const transformTimestanp = (date: Timestamp) => {
    if (date) {
        return date.toDate();
    }
    return new Date(NaN);
}
export const transformMetadata = <T extends EntityServerMetadata>(doc: T) => {
    const { createdAt, updatedAt, ...data } = doc;
    return {
        ...data,
        createdAt: transformTimestanp(createdAt),
        updatedAt: transformTimestanp(updatedAt),
    }
}
