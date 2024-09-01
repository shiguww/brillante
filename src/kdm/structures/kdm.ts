import KDMString from "#/kdm/kdm-string";
import KDMPointer from "#/kdm/kdm-pointer";

type KDMSection0 = KDMPointer<{
  strings: KDMString[];
}>;

abstract class KDM<T extends object> {
  protected static readonly SIGNATURE_SIZE = 8;
  protected static readonly SIGNATURE_1 = 0x524D444B;
  protected static readonly SIGNATURE_2 = 0x00010100;

  protected abstract section0: KDMSection0;

  public abstract export(): T;
  public abstract import(data: T): KDM<T>;

  public inspect(): object {
    return Object.assign({}, this, {
      toJSON: undefined
    });
  }

  protected findString(_string: string): KDMString {
    const string = this.section0.strings.find((s) => s.valueOf() === _string);

    if (_string === "") {
      return KDMString.NULL;
    }

    if (string === undefined) {
      console.warn(`Could not find string '${_string}'. Returning NULL instead.`);
      return KDMString.NULL;
    }

    return string;
  }

  protected findStringWithOffset(offset: number): KDMString {
    const string = this.section0.strings.find((s) => s.offset === offset);

    if (offset === 0) {
      return KDMString.NULL;
    }

    if (string === undefined) {
      console.warn(
        `Could not find a string with offset 0x${offset.toString(16).toUpperCase().padStart(8, "0")
        }. Returning NULL instead.`
      );

      return KDMString.NULL;
    }

    return string;
  }

  protected registerString(string: string, offset?: number): void {
    if (string === "") {
      return;
    }

    if (this.section0.strings.find((s) => s.valueOf() === string)) {
      console.warn(`Registering string '${string}' multiple times.`);
    }

    this.section0.strings.push(new KDMString(string, offset));
  }

  protected registerStringIfNotExists(string: string, offset?: number): void {
    if (this.section0.strings.find((s) => s.valueOf() === string)) {
      return;
    }

    return this.registerString(string, offset);
  }
}

export default KDM;
