import path from 'path';
import generate from '../generate';

const generateUseHttpMutation = (props) => {
    const { outdir, metadata } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/generic/useHttpMutation.hbs'),
        targetPath: path.join(outdir, 'useHttpMutation.ts'),
        data: {
            metadata,
        },
    });
};

export default generateUseHttpMutation;
