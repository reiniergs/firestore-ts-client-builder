import { ClientDataLayerProps } from "./types";
import generateEntityCode from "./generate/generateEntityCode";
import removeDir from "./fs/removeDir";
import createDir from "./fs/createDir";
import copyGenerics from "./fs/copyGenerics";
import generateFirebase from "./generate/generateFirebase";

export const createClientDataLayer = (props: ClientDataLayerProps) => {
  const { outdir, metadata, firebaseConfig } = props;
  removeDir(outdir);
  createDir(outdir);

  copyGenerics(outdir);
  generateFirebase({ outdir, firebaseConfig });

  Object.keys(metadata.entities).forEach((entityName) => {
    generateEntityCode({
      outdir,
      entityName,
      entity: metadata.entities[entityName],
    });
  });
};
