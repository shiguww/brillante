import crypto from "node:crypto";
const sha256 = (buffer: Buffer) => crypto.createHash("sha256").update(buffer).digest("hex");
export default sha256;
