import { createClient } from "redis";
import { fileURLToPath } from "url";
import express from "express";
import { WebSocketServer } from "ws";
import share from "share";
import path from "path";
import http from "http";

const redis = createClient();
redis.connect().catch(console.error); 

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(app);
const wss = new WebSocketServer({ server }); // <- renamed to `wss` for clarity

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("pad");
});

const options = {
  db: { type: "redis" },
};

// Attach share server to WebSocket server
share.server.attach(wss, options);

// Start HTTP server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
