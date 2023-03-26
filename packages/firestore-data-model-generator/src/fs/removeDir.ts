import { rimrafSync } from "rimraf";

const removeDir = (dirPath: string) => {
  rimrafSync(dirPath);
};

export default removeDir;
