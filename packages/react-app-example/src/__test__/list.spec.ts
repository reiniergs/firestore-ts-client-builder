/* eslint-disable @typescript-eslint/naming-convention */
import { getDocs, getDocsFromServer, getDocsFromCache } from 'firebase/firestore';
import list from '../data/customer/list';

jest.mock('firebase/firestore', () => {
    const {
        getDoc: _getDoc,
        getDocFromServer: _getDocFromServer,
        getDocFromCache: _getDocFromCache,
        ...rest
    } = jest.requireActual('firebase/firestore');
    return {
        ...rest,
        collection: jest.fn(),
        getDocs: jest.fn(),
        getDocsFromServer: jest.fn(),
        getDocsFromCache: jest.fn(),
    };
});
jest.mock('../data/utils', () => ({
    processTimestampFields: jest.fn(),
    transformMetadata: jest.fn(),
}));

const mockGetDocs = getDocs as jest.MockedFunction<typeof getDocs>;
const mockGetDocsFromServer = getDocsFromServer as jest.MockedFunction<typeof getDocsFromServer>;
const mockGetDocsFromCache = getDocsFromCache as jest.MockedFunction<typeof getDocsFromCache>;

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
const mockSnapshot = {
    docs: [mockData],
    empty: false,
    metadata: {
        fromCache: false,
        hasPendingWrites: false,
        isEqual: jest.fn(),
    },
    query: {} as any,
    size: 1,
    docChanges: jest.fn().mockResolvedValue([]),
    forEach: jest.fn(),
};

describe('get', () => {
    describe('Cache', () => {
        beforeEach(() => {
            jest.clearAllMocks();
            mockGetDocs.mockResolvedValue(mockSnapshot);
            mockGetDocsFromServer.mockResolvedValue(mockSnapshot);
            mockGetDocsFromCache.mockResolvedValue(mockSnapshot);
        });

        it('should query directly from server when `disableCache` is true', async () => {
            await list({ disableCache: true });
            expect(mockGetDocsFromServer).toBeCalledTimes(1);
            expect(mockGetDocs).not.toBeCalled();
            expect(mockGetDocsFromCache).not.toBeCalled();
        });

        it('should query normally when `disableCache` is false', async () => {
            await list({ disableCache: false });
            expect(mockGetDocs).toBeCalledTimes(1);
            expect(mockGetDocsFromCache).not.toBeCalled();
            expect(mockGetDocsFromServer).not.toBeCalled();
        });

        it('should query normally when `opts` not provided', async () => {
            await list();
            expect(mockGetDocs).toBeCalledTimes(1);
            expect(mockGetDocsFromCache).not.toBeCalled();
            expect(mockGetDocsFromServer).not.toBeCalled();
        });
    });
});
