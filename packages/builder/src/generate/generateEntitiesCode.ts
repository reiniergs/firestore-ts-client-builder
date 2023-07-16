import path from 'path';
import { Entity } from '../types';
import { GenerateEntityProps } from './types';

interface GenerateEntitiesCodeProps {
    outdir: string;
    entities: Record<string, Entity>;
    parents?: string[];
    generator: (params: GenerateEntityProps) => void;
}

const generateEntitiesCode = ({
    entities, outdir, parents = [], generator,
}: GenerateEntitiesCodeProps) => {
    Object.keys(entities).forEach((entityName) => {
        generator({
            outdir,
            entityName,
            entity: entities[entityName],
            parents,
        });
        if (entities[entityName].subcollections) {
            parents.push(entityName);
            generateEntitiesCode({
                outdir: path.join(outdir, entityName),
                entities: entities[entityName].subcollections,
                parents,
                generator,
            });
            parents.pop();
        }
    });
};

export default generateEntitiesCode;
