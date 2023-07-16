import isWellFormedPath from './isWellFormedPath';

const extractParams = (path: string): string[] => {
    if (!isWellFormedPath(path)) {
        throw new Error(`Path ${path} is not well formed`);
    }
    const matches = path.match(/{(.*?)}/g);
    return matches ? matches.map((match) => match.slice(1, -1)) : [];
};

export default extractParams;
