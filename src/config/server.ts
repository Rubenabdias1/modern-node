import { getEnvOrThrow } from "./config.js";

const tempPort = parseInt(getEnvOrThrow("PORT"), 10);
if (isNaN(tempPort))
  throw new Error("Environment variable PORT must be a valid number");

const port = tempPort;
const host = getEnvOrThrow("HOST");

export const ServerConfig = {
  port,
  host,
};
