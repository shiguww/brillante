import KDM from "#/kdm/structures/kdm";

abstract class KDMBuilder extends KDM<any> {
  public abstract build(): Buffer;
}

export default KDMBuilder;
