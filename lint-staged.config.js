module.exports = {
  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js|jsx)": () => [`npx eslint --fix .`, `npx prettier --write .`, `git add .`],

  // Format MarkDown and JSON
  "**/*.(md|json)": () => `npx prettier --write .`,
};
