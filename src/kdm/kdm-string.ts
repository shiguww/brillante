import type KDMPointer from "#/kdm/kdm-pointer";

class KDMString extends String implements KDMPointer<String> {
  public static readonly NULL = new KDMString("", 0);
  
  public offset: number;

  public constructor(string?: string | undefined, offset?: number | undefined) {
    super(string || "");
    this.offset = offset || 0;
  }

  public toJSON(): object {
    return ({
      offset: this.offset,
      string: this.valueOf()
    });
  }
}

export default KDMString;
