interface GenerateProps {
    templatePath: string;
    targetPath: string;
    data: Record<string, unknown>;
}
declare const generate: (props: GenerateProps) => void;
export default generate;
