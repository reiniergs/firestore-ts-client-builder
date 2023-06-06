import fs from 'fs';
import path from 'path';

const copyGenerics = (subdir: string = '.', outdir: string) => {
    fs.cpSync(path.join(__dirname, '../generics', subdir), outdir, { recursive: true });
};

export default copyGenerics;
