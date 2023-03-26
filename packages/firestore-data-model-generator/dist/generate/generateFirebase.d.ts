import { FirebaseConfig } from "../types";
interface GenerateFirebaseProps {
    outdir: string;
    firebaseConfig: FirebaseConfig;
}
declare const generateFirebase: (props: GenerateFirebaseProps) => void;
export default generateFirebase;
