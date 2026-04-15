import { access, cp, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");

const htmlCandidates = ["index.source.html", "index.html"];

const findBuiltHtml = async () => {
  for (const candidate of htmlCandidates) {
    const candidatePath = path.join(distDir, candidate);
    try {
      await access(candidatePath);
      return candidatePath;
    } catch {
      // Try next candidate.
    }
  }

  throw new Error("No built HTML entry file found in dist/. Run npm run build first.");
};

const syncPagesRoot = async () => {
  const builtHtmlPath = await findBuiltHtml();
  const builtHtml = await readFile(builtHtmlPath, "utf8");

  await rm(path.join(projectRoot, "assets"), { recursive: true, force: true });
  await cp(path.join(distDir, "assets"), path.join(projectRoot, "assets"), { recursive: true });

  await cp(path.join(distDir, "favicon.ico"), path.join(projectRoot, "favicon.ico"), { force: true });
  await cp(path.join(distDir, "placeholder.svg"), path.join(projectRoot, "placeholder.svg"), { force: true });
  await cp(path.join(distDir, "robots.txt"), path.join(projectRoot, "robots.txt"), { force: true });

  await writeFile(path.join(projectRoot, "index.html"), builtHtml);
  await writeFile(path.join(projectRoot, "404.html"), builtHtml);

  console.log("GitHub Pages root synced successfully.");
};

syncPagesRoot().catch((error) => {
  console.error(error);
  process.exit(1);
});
