import path from 'path';
import { FirebaseAdminConfig } from '../../types';
import generate from '../generate';

interface GenerateFirebaseProps {
    outdir: string;
    firebaseAdminConfig: FirebaseAdminConfig;
    appName?: string;
    applicationCredentials?: string;
}

const generateFirebaseAdmin = (props: GenerateFirebaseProps) => {
    const {
        outdir, firebaseAdminConfig = {}, applicationCredentials, appName,
    } = props;
    generate({
        templatePath: path.join(__dirname, '../../templates/firebaseAdmin.hbs'),
        targetPath: path.join(outdir, 'admin.ts'),
        data: {
            appName,
            applicationCredentials,
            firebaseAdminConfig: Object.keys(firebaseAdminConfig)
                .map((name) => ({ name, value: firebaseAdminConfig[name] })),
        },
    });
};

export default generateFirebaseAdmin;
