import hbs from 'handlebars';
import fs from 'fs';
import prettier from 'prettier';
import path from 'path';

interface GenerateProps {
    templatePath: string;
    targetPath: string;
    data: Record<string, unknown>;
}

hbs.registerHelper('eq', (arg1, arg2) => arg1 === arg2);
hbs.registerHelper('toArray', (arg1) => {
    if (Array.isArray(arg1)) {
        return arg1;
    }
    return [arg1];
});
hbs.registerPartial(
    'properties',
    fs
        .readFileSync(path.join(__dirname, '../templates/partials/properties.hbs'))
        .toString(),
);
hbs.registerPartial(
    'typedSubcollectionParams',
    '{{#each parents}}{{this}}Id: string, {{/each}}',
);
hbs.registerPartial(
    'subcollectionParams',
    '{{#each parents}}{{this}}Id, {{/each}}',
);
hbs.registerPartial(
    'subcollectionPath',
    // eslint-disable-next-line no-template-curly-in-string
    '{{#each parents}}/{{this}}/${ {{this}}Id}{{/each}}',
);

const replaceSingleQuotes = (input: string) => input.replace(/&#x27;/g, "'");

const generate = (props: GenerateProps) => {
    const { templatePath, targetPath, data } = props;
    const templateStr = fs.readFileSync(templatePath).toString();
    const template = hbs.compile(templateStr);
    const content = replaceSingleQuotes(template(data));
    fs.writeFileSync(
        targetPath,
        prettier.format(content, { parser: 'typescript' }),
    );
};

export default generate;
