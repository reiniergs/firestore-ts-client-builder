import generateGet from './generateGet';
import generateAdd from './generateAdd';
import generateTypes from './generateTypes';
import generateUpdate from './generateUpdate';
import generateRemove from './generateRemove';
import generateList from './generateList';
import generatePaginate from './generatePaginate';
import generateOnSnapshotDoc from './generateOnSnapshotDoc';
import generateOnSnapshotCollection from './generateOnSnapshotCollection';

export default [
    generateGet,
    generateAdd,
    generateUpdate,
    generateRemove,
    generateList,
    generateOnSnapshotDoc,
    generateOnSnapshotCollection,
    generatePaginate,
    generateTypes,
];
