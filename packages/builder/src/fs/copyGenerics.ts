import fs from 'fs';
import path from 'path';

const copyGenerics = (outdir: string) => {
    fs.cpSync(path.join(__dirname, '../generics'), outdir, { recursive: true });
};

export default copyGenerics;
