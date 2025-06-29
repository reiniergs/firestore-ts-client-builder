import path from 'path';
import { ServiceAccount } from 'firebase-admin/app';
import { FirebaseAdminConfig, FirestoreConfig } from '../../types';
import generate from '../generate';

interface GenerateFirebaseProps {
    outdir: string;
    firebaseAdminConfig: FirebaseAdminConfig;
    appName?: string;
    applicationCredentials?: ServiceAccount;
    firestoreConfig?: FirestoreConfig;
}

const generateFirebaseAdmin = (props: GenerateFirebaseProps) => {
    const {
        outdir,
        firebaseAdminConfig = {},
        applicationCredentials,
        appName,
        firestoreConfig,
    } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/firebaseAdmin.hbs'),
        targetPath: path.join(outdir, 'admin.ts'),
        data: {
            appName,
            applicationCredentials,
            firebaseAdminConfig: Object.keys(firebaseAdminConfig)
                .map((name) => ({ name, value: firebaseAdminConfig[name] })),
            firestoreConfig,
        },
    });
};

export default generateFirebaseAdmin;
