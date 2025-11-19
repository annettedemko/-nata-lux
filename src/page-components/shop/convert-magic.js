import fs from "fs";
import HTMLtoJSX from "htmltojsx";

const converter = new HTMLtoJSX({ createClass: false });
const html = fs.readFileSync("cleaned_RenewBioRepairPro.html", "utf8");
const output = converter.convert(html);

fs.writeFileSync("output.jsx", output);
console.log("✅ JSX файл создан: output.jsx");