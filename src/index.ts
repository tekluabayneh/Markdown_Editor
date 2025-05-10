import express from "express";

import path from "path";
import { fileURLToPath } from "url";
const app = express();
// Derive __dirname equivalent for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));
app.get("/", function (req, res) {
  res.render("pad");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
