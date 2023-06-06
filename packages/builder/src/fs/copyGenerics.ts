import fs from 'fs';
import path from 'path';

const copyGenerics = (outdir: string, subdir: string = '.') => {
    fs.cpSync(path.join(__dirname, '../generics', subdir), outdir, { recursive: true });
};

export default copyGenerics;
