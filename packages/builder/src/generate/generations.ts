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
import generateUseCount from './entity/generateUseCount';

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
    generateUseDocOnce,
    generateUseCollectionOnce,
    generateUseCount,
];

export const genericCode = [generateUseHttpQuery, generateUseHttpMutation];
