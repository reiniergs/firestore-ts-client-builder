// entity code
import generateGet from './entity/generateGet';
import generateAdd from './entity/generateAdd';
import generateTypes from './entity/generateTypes';
import generateUpdate from './entity/generateUpdate';
import generateRemove from './entity/generateRemove';
import generateList from './entity/generateList';
import generatePaginate from './entity/generatePaginate';
import generateOnSnapshotDoc from './entity/generateOnSnapshotDoc';
import generateOnSnapshotCollection from './entity/generateOnSnapshotCollection';
import generateUseDoc from './entity/generateUseDoc';
import generateUseCollection from './entity/generateUseCollection';

// generic code
import generateUseHttpQuery from './generic/genearteUseHttpQuery';

export const entityCode = [
    generateGet,
    generateAdd,
    generateUpdate,
    generateRemove,
    generateList,
    generateOnSnapshotDoc,
    generateOnSnapshotCollection,
    generatePaginate,
    generateTypes,
    generateUseDoc,
    generateUseCollection,
];

export const genericCode = [generateUseHttpQuery];
