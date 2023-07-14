export const  isDate = (date: unknown): boolean => {
    return Object.prototype.toString.call(date) === '[object Date]';
}
