import createDir from "../fs/createDir";
import path from "path";
import { GenerateEntityProps } from "./types";
import generations from "./generations";

const generateEntityCode = ({
  outdir,
  entityName,
  entity,
}: GenerateEntityProps) => {
  createDir(path.join(outdir, entityName));
  generations.forEach((generation) =>
    generation({
      outdir,
      entityName,
      entity,
    })
  );
};

export default generateEntityCode;
