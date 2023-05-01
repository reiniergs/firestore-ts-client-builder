// eslint-disable-next-line import/no-extraneous-dependencies
import { createLiveEditStory } from 'storybook-addon-code-editor';
import { commonExports } from '../utils';
import count from '~/data/customer/count';
// @ts-ignore
import CountSource from './count.source?raw';
// @ts-ignore
import CountWithQuerySource from './queryCount.source?raw';

export default {
    title: 'Entities/Count/Stories',
    parameters: {
        docs: {
            page: null,
        },
    },
};

export const Count = createLiveEditStory({
    availableImports: {
        ...commonExports,
        '~/data/customer/count': count as any,
    },
    code: CountSource,
});

export const CountWithQuery = createLiveEditStory({
    availableImports: {
        ...commonExports,
        '~/data/customer/count': count as any,
    },
    code: CountWithQuerySource,
});
