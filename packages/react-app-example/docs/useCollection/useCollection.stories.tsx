// eslint-disable-next-line import/no-extraneous-dependencies
import { createLiveEditStory } from 'storybook-addon-code-editor';
import { commonExports } from '../utils';
import useCollection from '~/data/customer/useCollection';
// @ts-ignore
import Source from './useCollection.source?raw';
// @ts-ignore
import DisabledCacheSource from './useCollectionDisabledCache.source?raw';

export default {
    title: 'Entities/useCollection/Stories',
    parameters: {
        docs: {
            page: null,
        },
    },
};

export const UseCollection = createLiveEditStory({
    availableImports: {
        ...commonExports,
        '~/data/customer/useCollection': useCollection as any,
    },
    code: Source,
});

export const UseCollectionDisabledCache = createLiveEditStory({
    availableImports: {
        ...commonExports,
        '~/data/customer/useCollection': useCollection as any,
    },
    code: DisabledCacheSource,
});
