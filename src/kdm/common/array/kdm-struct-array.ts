import z from "zod";
import type KDM from "#/kdm/kdm";
import assert from "node:assert/strict";
import type RBuffer from "#/buffer/r-buffer";
import type WBuffer from "#/buffer/w-buffer";
import LucieMSG from "#/kdm/lucie/lucie-msg";
import KDMStruct from "#/kdm/common/kdm-struct";
import KDMArray from "#/kdm/common/array/kdm-array";
import MapObjectData7 from "#/kdm/mapobject/mapobject-data7";
import type KDMStringPointer from "#/kdm/common/primitive/kdm-string-pointer";
import DisposData13 from "#/kdm/dispos-data/dispos-data13";
import BattleModel0 from "#/kdm/battle-model/battle-model0";
import SoundAnime0 from "#/kdm/sound-anime/sound-anime0";
import ItemData9 from "#/kdm/item-data/item-data9";

type KDMStructConstructor = (new (kdm: KDM) => KDMStruct);

class KDMStructArray extends KDMArray {
  public static get schema(): typeof IKDMStructArray {
    return IKDMStructArray;
  }

  public override entries: Array<KDMStruct> = [];
  private _elementConstructor: null | KDMStructConstructor;

  public constructor(kdm: KDM) {
    super(kdm, IKDMStructArray());
    this._elementConstructor = null;
  }

  public override get sizeof(): number {
    if (this.entries.length === 0 && !this.nullTerminatorFlag) {
      return 0;
    }

    return KDMStructArray.HEADING_SIZE + (this.nullTerminatorFlag
      ? this.element.sizeof * (this.entries.length + 1)
      : this.element.sizeof * this.entries.length);
  }

  public get element(): KDMStruct {
    return new this.elementConstructor(this.kdm);
  }

  private get elementConstructor(): KDMStructConstructor {
    assert(this._elementConstructor !== null);
    return this._elementConstructor;
  }

  private set elementConstructor(constructor: KDMStructConstructor) {
    if (constructor === LucieMSG) {
      this.hasNULLTerminator();
    }

    if(constructor === BattleModel0) {
      this.hasNULLTerminator();
    }

    if(constructor === SoundAnime0) {
      this.hasNULLTerminator();
    }

    this._elementConstructor = constructor;
  }

  public override get strings(): Array<KDMStringPointer> {
    if (this.nullTerminatorFlag) {
      return [
        ...this.entries.map((e) => e.strings).flat(),
        ...this.element.strings
      ];
    }

    return this.entries.map((e) => e.strings).flat();
  }

  protected override _get(): IKDMStructArray {
    return IKDMStructArray().parse({
      _refkey: this.refkey,
      _item_kind: this.elementConstructor.name,
      entries: this.entries.map((e) => e.get())
    });
  }

  protected override _set(array: IKDMStructArray): void {
    const constructor = this.kdm.entities.map((e) => e.constructor).find((constructor) => {
      const instance = new constructor(this.kdm) as KDMStruct;
      return (instance instanceof KDMStruct && instance.get()._kind === array._item_kind);
    });

    assert(constructor !== undefined);
    this.elementConstructor = constructor as KDMStructConstructor;

    this.refkey = array._refkey;
    this.entries = array.entries.map((data) => this.element.set(data));
  }

  private _prebuild(): void {
    const tid = this.kdm.entities.find((e) => e.constructor === this.elementConstructor)?.uid;
    assert(tid !== undefined);

    this.tid.set(tid);

    this.size0.set((this.sizeof - KDMStructArray.HEADING_SIZE) / 4);
    this.size1.set(((this.sizeof - KDMStructArray.HEADING_SIZE) / this.element.sizeof) * this.element.realfields.length);
  
    if(this.elementConstructor === MapObjectData7) {
      this.size1.set(this.size0.get());
    }

    // dude, what the fuck is going on here
    if(this.elementConstructor === DisposData13) {
      this.size1.set(Math.ceil(this.size0.get() * 1.025));
    }

    if(this.elementConstructor === ItemData9) {
      this.size1.set(this.size1.get() + 1);
    }
  }

  protected override _build(buffer: WBuffer): void {
    if (this.entries.length === 0 && !this.nullTerminatorFlag) {
      return;
    }

    this._prebuild();

    this.uid.build(buffer);
    this.size0.build(buffer);

    this.tid.build(buffer);
    this.size1.build(buffer);

    this.entries.forEach((e) => e.build(buffer));

    if (this.nullTerminatorFlag) {
      this.element.build(buffer);
    }
  }

  protected override _parse(buffer: RBuffer): void {
    this.uid.parse(buffer);
    this.size0.parse(buffer);

    this.tid.parse(buffer);
    this.size1.parse(buffer);

    const constructor = this.kdm.entities.find((e) => e.uid === this.tid.get())?.constructor;
    assert(constructor !== undefined);

    this.elementConstructor = constructor as KDMStructConstructor;

    const count = (this.nullTerminatorFlag
      ? ((this.size0.get() * 4) / this.element.sizeof) - 1
      : (this.size0.get() * 4) / this.element.sizeof);

    for (let i = 0; i < count; i += 1) {
      const instance = this.element;

      this.entries.push(instance);
      instance.parse(buffer);
    }

    if (this.nullTerminatorFlag) {
      this.element.parse(buffer);
    }
  }

  public override toJSON(): object {
    return ({ ...super.toJSON(), _item_kind: this.elementConstructor.name });
  }
}

type IKDMStruct = z.infer<typeof KDMStruct.baseschema>;

const IKDMStructArray = <T extends IKDMStruct = IKDMStruct>(element?: z.ZodType<T, any, any>) => z.object({
  _item_kind: z.string(),
  ...KDMArray.baseschema(element || KDMStruct.baseschema.passthrough()).shape,
  _kind: z.literal("KDMStructArray").default("KDMStructArray")
});

interface IKDMStructArray {
  _kind: string;
  _refkey: string;
  _item_kind: string;
  entries: Array<z.infer<typeof KDMStruct.baseschema>>;
}

export default KDMStructArray;
