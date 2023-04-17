// eslint-disable-next-line import/no-extraneous-dependencies
import { createLiveEditStory } from 'storybook-addon-code-editor';
import { commonExports } from '../utils';
import add from '~/data/customer/add';
// @ts-ignore
import AddSource from './add.source?raw';

export default {
    title: 'Functions/Add/Stories',
    parameters: {
        docs: {
            page: null,
        },
    },
};

export const Add = createLiveEditStory({
    availableImports: {
        ...commonExports,
        '~/data/customer/add': add as any,
    },
    code: AddSource,
});
