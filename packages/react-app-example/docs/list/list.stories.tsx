// eslint-disable-next-line import/no-extraneous-dependencies
import { createLiveEditStory } from 'storybook-addon-code-editor';
import { commonExports } from '../utils';
import list from '~/data/customer/list';
// @ts-ignore
import AddSource from './list.source?raw';

export default {
    title: 'Entities/List/Stories',
    parameters: {
        docs: {
            page: null,
        },
    },
};

export const List = createLiveEditStory({
    availableImports: {
        ...commonExports,
        '~/data/customer/list': list as any,
    },
    code: AddSource,
});
