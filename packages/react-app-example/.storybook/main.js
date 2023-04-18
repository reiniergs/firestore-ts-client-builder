const {
    getCodeEditorStaticDirs,
} = require('storybook-addon-code-editor/getStaticDirs');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: [
        '../docs/**/*.stories.mdx',
        '../docs/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    // monaco-editor needs static files to be available at runtime.
    staticDirs: [
        ...getCodeEditorStaticDirs(),
    ],
    addons: [
        'storybook-addon-code-editor',
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: false,
            },
        },
    ],
    framework: '@storybook/react',
    core: { builder: 'webpack5' },
    webpackFinal: async config => {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
        return config
    }
};