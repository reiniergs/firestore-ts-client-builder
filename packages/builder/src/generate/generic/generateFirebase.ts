import path from 'path';
import { FirebaseConfig, FirestoreConfig } from '../../types';
import generate from '../generate';

interface GenerateFirebaseProps {
    outdir: string;
    firebaseConfig: FirebaseConfig;
    firestoreConfig?: FirestoreConfig;
}

const generateFirebase = (props: GenerateFirebaseProps) => {
    const { outdir, firebaseConfig, firestoreConfig } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/firebase.hbs'),
        targetPath: path.join(outdir, 'firebase.ts'),
        data: {
            firebaseConfig: Object.keys(firebaseConfig)
                .map((name) => ({ name, value: firebaseConfig[name] })),
            firestoreConfig,
        },
    });
};

export default generateFirebase;
