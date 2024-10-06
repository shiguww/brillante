import type KDMObject from "#kdm/editor/common/kdm-object";
import type KDMStructure from "#kdm/editor/common/kdm-structure";

interface KDMTable<T = unknown> extends KDMObject<T> {
  readonly entries: KDMStructure<T>[];
}

export default KDMTable;
