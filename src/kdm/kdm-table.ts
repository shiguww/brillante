import PM4Buffer from "#/pm4-buffer";

interface KDMTable<T> {
  name: string;
  entries: T[];
  offsets: number[];
  build(buffer: PM4Buffer): void;
  parse(buffer: PM4Buffer): void;
}

export default KDMTable;
