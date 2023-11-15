/* eslint-disable @typescript-eslint/naming-convention */
import { getDoc, getDocFromServer, getDocFromCache } from 'firebase/firestore';
import get from '../data/customer/get';

jest.mock('firebase/firestore', () => {
    const {
        getDoc: _getDoc,
        getDocFromServer: _getDocFromServer,
        getDocFromCache: _getDocFromCache,
        ...rest
    } = jest.requireActual('firebase/firestore');
    return {
        ...rest,
        getDoc: jest.fn(),
        getDocFromServer: jest.fn(),
        getDocFromCache: jest.fn(),
    };
});
jest.mock('../data/utils', () => ({
    processTimestampFields: jest.fn(),
}));

const mockGetDoc = getDoc as jest.MockedFunction<typeof getDoc>;
const mockGetDocFromServer = getDocFromServer as jest.MockedFunction<typeof getDocFromServer>;
const mockGetDocFromCache = getDocFromCache as jest.MockedFunction<typeof getDocFromCache>;

const mockData = {
    metadata: {
        fromCache: false,
        hasPendingWrites: false,
        isEqual: jest.fn(),
    },
    id: 'id',
    ref: {
        id: 'id',
    } as any,
    data: jest.fn(),
    get: jest.fn(),
    exists: jest.fn().mockReturnValue(true),
};

describe('get', () => {
    describe('Cache', () => {
        beforeEach(() => {
            jest.clearAllMocks();
            mockGetDoc.mockResolvedValue(mockData);
            mockGetDocFromServer.mockResolvedValue(mockData);
            mockGetDocFromCache.mockResolvedValue(mockData);
        });

        it('should query directly from server when `disableCache` is true', async () => {
            await get('id', { disableCache: true });
            expect(mockGetDocFromServer).toBeCalledTimes(1);
            expect(mockGetDoc).not.toBeCalled();
            expect(mockGetDocFromCache).not.toBeCalled();
        });

        it('should query normally when `disableCache` is false', async () => {
            await get('id', { disableCache: false });
            expect(mockGetDoc).toBeCalledTimes(1);
            expect(mockGetDocFromCache).not.toBeCalled();
            expect(mockGetDocFromServer).not.toBeCalled();
        });

        it('should query normally when `opts` not provided', async () => {
            await get('id');
            expect(mockGetDoc).toBeCalledTimes(1);
            expect(mockGetDocFromCache).not.toBeCalled();
            expect(mockGetDocFromServer).not.toBeCalled();
        });
    });
});
