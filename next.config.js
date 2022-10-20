import path from "path";
import { fileURLToPath } from "url";

// returns the fully-resolved platform-specific Node.js file path.
const __filename = fileURLToPath(import.meta.url);

// returns the directory name of the path
const __dirname = path.dirname(__filename);

// minimize js on build
export const swcMinify = true;

// Strict Mode can be a danger when developing as it makes Components render twice
// TODO: No strict mode when developing otherwise it should be true
export const reactStrictMode = false;

export const eslint = {
  dirs: ["pages", "components"],
};

/* export const experimental = { */
/*   images: { */
/*     layoutRaw: true, */
/*   }, */
/* }; */

export const sassOptions = {
  includePaths: [path.join(__dirname, "styles")],
};
