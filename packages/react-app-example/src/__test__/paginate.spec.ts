/* eslint-disable @typescript-eslint/naming-convention */
import {
    getDoc, getDocs, getDocsFromServer, getDocsFromCache,
} from 'firebase/firestore';
import paginate from '../data/customer/paginate';
import { processTimestampFields } from '../data/utils';

jest.mock('firebase/auth', () => {
    const { getAuth, ...rest } = jest.requireActual('firebase/auth');
    return {
        ...rest,
        getAuth: jest.fn(),
    };
});
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
        query: jest.fn(),
        getDoc: jest.fn(),
        getDocs: jest.fn(),
        getDocsFromServer: jest.fn(),
        getDocsFromCache: jest.fn(),
    };
});
jest.mock('../data/utils', () => ({
    processTimestampFields: jest.fn(),
    transformMetadata: jest.fn(),
}));

const mockGetDoc = getDoc as jest.MockedFunction<typeof getDoc>;
const mockGetDocs = getDocs as jest.MockedFunction<typeof getDocs>;
const mockGetDocsFromServer = getDocsFromServer as jest.MockedFunction<typeof getDocsFromServer>;
const mockGetDocsFromCache = getDocsFromCache as jest.MockedFunction<typeof getDocsFromCache>;
const mockProcessTimestampFields = processTimestampFields as jest.MockedFunction<
    typeof processTimestampFields
>;

const mockData = {
    id: 'id',
    data: jest.fn(),
    get: jest.fn(),
    exists: jest.fn().mockReturnValue(true),
    metadata: {
        fromCache: false,
        hasPendingWrites: false,
        isEqual: jest.fn(),
    },
    ref: {
        firestore: {
            app: {
                name: 'test',
                options: {},
                automaticDataCollectionEnabled: false,
            },
            type: 'firestore',
            toJSON: jest.fn(),
        },
        id: 'id',
    } as any,
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
            mockGetDoc.mockResolvedValue(mockData);
            mockProcessTimestampFields.mockReturnValue(mockData);
            mockGetDocs.mockResolvedValue(mockSnapshot);
            mockGetDocsFromServer.mockResolvedValue(mockSnapshot);
            mockGetDocsFromCache.mockResolvedValue(mockSnapshot);
        });

        it('should query directly from server when `disableCache` is true', async () => {
            await paginate({ disableCache: true });
            expect(mockGetDocsFromServer).toBeCalledTimes(1);
            expect(mockGetDocs).not.toBeCalled();
            expect(mockGetDocsFromCache).not.toBeCalled();
        });

        it('should query normally when `disableCache` is false', async () => {
            await paginate({ disableCache: false });
            expect(mockGetDocs).toBeCalledTimes(1);
            expect(mockGetDocsFromCache).not.toBeCalled();
            expect(mockGetDocsFromServer).not.toBeCalled();
        });

        it('should query normally when `opts` not provided', async () => {
            await paginate({});
            expect(mockGetDocs).toBeCalledTimes(1);
            expect(mockGetDocsFromCache).not.toBeCalled();
            expect(mockGetDocsFromServer).not.toBeCalled();
        });
    });
});
