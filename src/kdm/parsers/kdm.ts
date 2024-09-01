import KDM from "#/kdm/structures/kdm";

abstract class KDMParser extends KDM<any> {
  public abstract parse(buffer: Buffer): KDMParser;
}

export default KDMParser;
