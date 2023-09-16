import express from "express";
import { config } from "./config/config.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(config.server.port, () => {
  console.log(`🚀 API: ${config.server.host}:${config.server.port}/`);
});
