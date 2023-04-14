import path from 'path';
import { FirebaseConfig } from '../types';
import generate from './generate';

interface GenerateFirebaseProps {
    outdir: string;
    firebaseConfig: FirebaseConfig;
}

const generateFirebase = (props: GenerateFirebaseProps) => {
    const { outdir, firebaseConfig } = props;
    generate({
        templatePath: path.join(__dirname, '../templates/firebase.hbs'),
        targetPath: path.join(outdir, 'firebase.ts'),
        data: {
            firebaseConfig: Object.keys(firebaseConfig)
                .map((name) => ({ name, value: firebaseConfig[name] })),
        },
    });
};

export default generateFirebase;
