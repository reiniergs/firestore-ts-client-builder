import path from 'path';
import generate from '../generate';
import formatProperties from '../formatProperties';

const generateGlobalTypes = (props) => {
    const { outdir, metadata } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/generic/globals.hbs'),
        targetPath: path.join(outdir, 'globals.ts'),
        data: {
            types: formatProperties(metadata.types || {}),
        },
    });
};

export default generateGlobalTypes;
