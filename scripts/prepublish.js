import { execSync } from "child_process";
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");
const componentInputDir = path.join(rootDir, "src/components");

// run typescript compiler
execSync("mtc");
// Rename all exports.default to module.exports
execSync(
    "find dist -type f -name 'component*.js' | xargs sed -i '' 's/exports.default =/module.exports =/g'",
);
execSync(
    "sed -i '' 's/no-update-body-if=!!config.preserveItems/no-update-body-if(!!config.preserveItems)/g' dist/components/ebay-carousel/index.marko",
);

// create top level browser.json files to map to nested ones
fs.readdirSync(componentInputDir)
    .filter((folder) => folder.startsWith("ebay-"))
    .forEach((component) => {
        fs.writeFileSync(
            path.join(rootDir, `${component}.browser.json`),
            JSON.stringify(
                {
                    dependencies: [`./dist/components/${component}`],
                },
                null,
                4,
            ),
        );
    });

// update marko.json
const markoConfigPath = path.join(rootDir, "marko.json");
fs.writeFileSync(
    markoConfigPath,
    fs.readFileSync(markoConfigPath, "utf-8").replace(/\.\/src\//g, "./dist/"),
);

// copy over `types.d.ts` and `makeup.d.ts` files
fs.copyFileSync(
    path.join(rootDir, "src/types.d.ts"),
    path.join(rootDir, "dist/types.d.ts"),
);
fs.copyFileSync(
    path.join(rootDir, "src/makeup.d.ts"),
    path.join(rootDir, "dist/makeup.d.ts"),
);
