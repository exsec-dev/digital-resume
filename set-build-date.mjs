import { writeFileSync } from "fs";

const d = new Date();
const pad = (n) => String(n).padStart(2, "0");
const stamp = `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
writeFileSync(".env", `VITE_BUILD_DATE=${stamp}\n`);
