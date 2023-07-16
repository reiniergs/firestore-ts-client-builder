import removeDir from './removeDir';
import createDir from './createDir';

const prepareDir = (outdir: string) => {
    removeDir(outdir);
    createDir(outdir);
};

export default prepareDir;
