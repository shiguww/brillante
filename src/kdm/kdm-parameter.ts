import type KDM from "#/kdm/kdm";

type KDMParameterType =
  | typeof KDM.PARAMETER_TYPE_F32
  | typeof KDM.PARAMETER_TYPE_U32;

interface KDMParameter {
  name: string;
  value: unknown;
  unknownZ0: number;
  unknownZ1: number;
  type: KDMParameterType;
}

export default KDMParameter;
