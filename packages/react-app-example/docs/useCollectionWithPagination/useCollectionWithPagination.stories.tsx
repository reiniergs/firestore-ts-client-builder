// eslint-disable-next-line import/no-extraneous-dependencies
import { createLiveEditStory } from 'storybook-addon-code-editor';
import { commonExports } from '../utils';
import useCount from '~/data/customer/useCount';
import onSnapshotPaginate from '~/data/customer/onSnapshotPaginate';
import useCollectionWithPagination from '~/data/customer/useCollectionWithPagination';
// @ts-ignore
import Source from './useCollectionWithPagination.source?raw';

export default {
    title: 'Entities/useCollectionWithPagination/Stories',
    parameters: {
        docs: {
            page: null,
        },
    },
};

export const List = createLiveEditStory({
    availableImports: {
        ...commonExports,
        '~/data/customer/useCount': useCount as any,
        '~/data/customer/onSnapshotPaginate': onSnapshotPaginate as any,
        '~/data/customer/useCollectionWithPagination': useCollectionWithPagination as any,
    },
    code: Source,
});
