import "dotenv/config";
import { ServerConfig } from "./server.js";

export function getEnvOrThrow(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const config = {
  server: ServerConfig,
};
