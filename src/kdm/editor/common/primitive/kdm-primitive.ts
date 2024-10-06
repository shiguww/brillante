import KDMStructure from "#kdm/editor/common/kdm-structure";

abstract class KDMPrimitive<T = unknown> extends KDMStructure<T> {
  public override get fields(): Array<KDMPrimitive> {
    return [this];
  }
}

export default KDMPrimitive;
