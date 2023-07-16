// entity code
import generateGet from './entity/generateGet';
import generateAdd from './entity/generateAdd';
import generateTypes from './entity/generateTypes';
import generateUpdate from './entity/generateUpdate';
import generateRemove from './entity/generateRemove';
import generateList from './entity/generateList';
import generateCount from './entity/generateCount';
import generatePaginate from './entity/generatePaginate';
import generateOnSnapshotDoc from './entity/generateOnSnapshotDoc';
import generateOnSnapshotCollection from './entity/generateOnSnapshotCollection';
import generateUseDoc from './entity/generateUseDoc';
import generateUseCollection from './entity/generateUseCollection';
import generateUseCollectionWithPagination from './entity/generateUseCollectionWithPagination';
import generateUseCount from './entity/generateUseCount';

// admin entity code
import generateAdminTypes from './entity/admin/generateTypes';
import generateAdminGet from './entity/admin/generateGet';
import generateAdminList from './entity/admin/generateList';
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

export const entityCode = [
    generateGet,
    generateAdd,
    generateUpdate,
    generateRemove,
    generateList,
    generateCount,
    generateOnSnapshotDoc,
    generateOnSnapshotCollection,
    generatePaginate,
    generateTypes,
    generateUseDoc,
    generateUseCollection,
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
    generateAdminPaginate,
    generateAdminAdd,
    generateAdminRemove,
    generateAdminUpdate,
    generateAdminCount,
];

export const genericCode = [generateUseHttpQuery, generateUseHttpMutation];
