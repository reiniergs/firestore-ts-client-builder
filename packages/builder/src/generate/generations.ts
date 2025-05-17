// entity code
import generateGet from './entity/generateGet';
import generateAdd from './entity/generateAdd';
import generateTypes from './entity/generateTypes';
import generateUpdate from './entity/generateUpdate';
import generateRemove from './entity/generateRemove';
import generateList from './entity/generateList';
import generateListCollectionGroup from './entity/generateListCollectionGroup';
import generateCount from './entity/generateCount';
import generatePaginate from './entity/generatePaginate';
import generateOnSnapshotDoc from './entity/generateOnSnapshotDoc';
import generateOnSnapshotCollection from './entity/generateOnSnapshotCollection';
import generateOnSnapshotCollectionGroup from './entity/generateOnSnapshotCollectionGroup';
import generateOnSnapshotPaginate from './entity/generateOnSnapshotPaginate';
import generateUseDoc from './entity/generateUseDoc';
import generateUseCollection from './entity/generateUseCollection';
import generateUseCollectionGroup from './entity/generateUseCollectionGroup';
import generateUseCollectionWithPagination from './entity/generateUseCollectionWithPagination';
import generateUseCount from './entity/generateUseCount';

// admin entity code
import generateAdminTypes from './entity/admin/generateTypes';
import generateAdminGet from './entity/admin/generateGet';
import generateAdminList from './entity/admin/generateList';
import generateAdminListCollectionGroup from './entity/admin/generateListCollectionGroup';
import generateAdminPaginate from './entity/admin/generatePaginate';
import generateAdminAdd from './entity/admin/generateAdd';
import generateAdminRemove from './entity/admin/generateRemove';
import generateAdminUpdate from './entity/admin/generateUpdate';
import generateAdminCount from './entity/admin/generateCount';

// endpoint code
import generateEndpointTypes from './endpoint/generateTypes';
import generateEndpointHook from './endpoint/generateHook';

// generic code
import generateUseHttpQuery from './generic/genearteUseHttpQuery';
import generateUseHttpMutation from './generic/genearteUseHttpMutation';
import generateUseDocOnce from './entity/generateUseDocOnce';
import generateUseCollectionOnce from './entity/generateUseCollectionOnce';
import generateGlobalTypes from './generic/generateGlobalTypes';

export const entityCode = [
    generateGet,
    generateAdd,
    generateUpdate,
    generateRemove,
    generateList,
    generateListCollectionGroup,
    generateCount,
    generateOnSnapshotDoc,
    generateOnSnapshotCollection,
    generateOnSnapshotCollectionGroup,
    generateOnSnapshotPaginate,
    generatePaginate,
    generateTypes,
    generateUseDoc,
    generateUseCollection,
    generateUseCollectionGroup,
    generateUseCollectionWithPagination,
    generateUseDocOnce,
    generateUseCollectionOnce,
    generateUseCount,
];

export const endpointCode = [generateEndpointTypes, generateEndpointHook];

export const adminEntityCode = [
    generateAdminTypes,
    generateAdminGet,
    generateAdminList,
    generateAdminListCollectionGroup,
    generateAdminPaginate,
    generateAdminAdd,
    generateAdminRemove,
    generateAdminUpdate,
    generateAdminCount,
];

export const genericCode = [
    generateUseHttpQuery,
    generateUseHttpMutation,
    generateGlobalTypes,
];
