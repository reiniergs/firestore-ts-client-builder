import path from 'path';
import { Entity, CustomTypes } from '../types';
import { GenerateEntityProps } from './types';

interface GenerateEntitiesCodeProps<T extends CustomTypes = {}> {
    outdir: string;
    entities: Record<string, Entity<T>>;
    parents?: string[];
    generator: (params: GenerateEntityProps<T>) => void;
}

const generateEntitiesCode = <T extends CustomTypes = {}>({
    entities, outdir, parents = [], generator,
}: GenerateEntitiesCodeProps<T>) => {
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
