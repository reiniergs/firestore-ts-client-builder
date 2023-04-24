// eslint-disable-next-line import/no-extraneous-dependencies
import { createLiveEditStory } from 'storybook-addon-code-editor';
import { commonExports } from '../utils';
import useCount from '~/data/customer/useCount';
// @ts-ignore
import UseCountSource from './useCount.source?raw';
// @ts-ignore
import UseCountWithQuerySource from './useCountWithQuery.source?raw';

export default {
    title: 'Entities/UseCount/Stories',
    parameters: {
        docs: {
            page: null,
        },
    },
};

export const UseCount = createLiveEditStory({
    availableImports: {
        ...commonExports,
        '~/data/customer/useCount': useCount as any,
    },
    code: UseCountSource,
});

export const UseCountWithQuery = createLiveEditStory({
    availableImports: {
        ...commonExports,
        '~/data/customer/useCount': useCount as any,
    },
    code: UseCountWithQuerySource,
});
