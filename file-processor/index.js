const testFolder =
  "/Users/felipevnunes/src/github.com/Shopify/partners/app/assets/javascripts/sections/services-marketplace/experts/components/request-quote/locales/";
const fs = require("fs");

const en = JSON.parse(fs.readFileSync(testFolder + "en.json"));

function removeKeys(base, obj) {
  const response = {};
  Object.keys(base).forEach(key => {
    if (typeof base[key] === "object") {
      response[key] = removeKeys(base[key], obj[key]);
      return;
    }

    response[key] = obj[key];
  });

  return response;
}

function processFile(fileName) {
  const fullPath = testFolder + fileName;
  const fileJson = JSON.parse(fs.readFileSync(fullPath));

  if (!fileJson.Profile) return;
  const result = removeKeys(en, fileJson.Profile);
  const data = JSON.stringify(result);
  fs.writeFileSync(fullPath, data);
}

fs.readdirSync(testFolder).forEach(file => {
  if (file === "en.json" || file === "index.ts") return;
  processFile(file);
});
