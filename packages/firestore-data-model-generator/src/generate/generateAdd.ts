import { GenerateEntityProps } from "./types";
import path from "path";
import capitalize from "lodash/capitalize";
import generate from "./generate";

const generateAdd = (props: GenerateEntityProps) => {
  const { outdir, entityName } = props;
  generate({
    templatePath: path.join(__dirname, "../templates/entity/add.hbs"),
    targetPath: path.join(outdir, entityName, "add.ts"),
    data: {
      entityName,
      entityInterface: capitalize(entityName),
    },
  });
};

export default generateAdd;
