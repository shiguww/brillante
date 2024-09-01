type KDMPointer<T extends object = {}> = T & { offset: number };

const KDMPointer = <T extends object>(obj: T, offset?: number): KDMPointer<T> => ({
  ...obj,
  offset: offset || 0
});

export default KDMPointer;
