type AppErrorTypes = 'NOT_FOUND' | 'UNAUTHORIZED' | 'CONFLICT' | 'UNPROCESSABLE_ENTITY';
export interface AppError {
    type: AppErrorTypes
    message: string
}

export function isAppError(error: object): error is AppError {
    return (error as AppError).type !== undefined;
}

export function typeToStatusCode(type: AppErrorTypes) {
    switch(type){
        case 'NOT_FOUND':
            return 404;
        case 'UNAUTHORIZED':
            return 401;
        case 'CONFLICT':
            return 409;
        case 'UNPROCESSABLE_ENTITY':
            return 422;
        default:
            return 400;   
    }
    
}