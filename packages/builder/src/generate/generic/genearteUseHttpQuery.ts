import path from 'path';
import generate from '../generate';

const generateUseHttpQuery = (props) => {
    const { outdir, metadata } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/generic/useHttpQuery.hbs'),
        targetPath: path.join(outdir, 'useHttpQuery.ts'),
        data: {
            metadata,
        },
    });
};

export default generateUseHttpQuery;
