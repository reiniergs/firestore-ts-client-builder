const isWellFormedPath = (path: string): boolean => {
    const segments = path.split('/');
    if (segments[0] === '') {
        segments.shift();
    }
    return segments.every((segment, index) => {
        if (index % 2 === 0) {
            return !segment.includes('{') && !segment.includes('}');
        }
        return /^{(.*?)}$/.test(segment);
    });
};

export default isWellFormedPath;
