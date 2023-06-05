import { FirebaseError } from 'firebase/app';
import { QueryErrorCode } from './types';

const errorCodes: Record<number, QueryErrorCode> = {
    400: 'bad-request',
    401: 'unauthorized',
    403: 'forbidden',
    404: 'not-found',
    405: 'method-not-allowed',
    406: 'not-acceptable',
    409: 'conflict',
    500: 'internal-server-error',
    501: 'not-implemented',
    502: 'bad-gateway',
    503: 'service-unavailable',
    504: 'gateway-timeout',
};

export const getQueryErrorCode = (status: number): QueryErrorCode => errorCodes[status] || 'unknown';

export class QueryError extends FirebaseError {
    /**
     * The backend error code associated with this error.
     */
    readonly code: QueryErrorCode;

    constructor(code: QueryErrorCode, message?: string) {
        super(code, message || '');
        this.code = code;

        // Set the prototype explicitly. See https://www.typescriptlang.org/docs/handbook/2/classes.html#inheriting-built-in-types
        Object.setPrototypeOf(this, QueryError.prototype);
    }
}
