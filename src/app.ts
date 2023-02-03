import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import { loadEnv, connectDb, disconnectDB } from "@/config";

import { authenticationRouter } from "./routers/authentication-router";
import { postTravelRouter } from "./routers/post-router";

loadEnv();

const app = express();

app
  .use(cors())
  .use(express.json())
  .use("/status", (_req, res) => res.send("OK!"))
  .use("/auth", authenticationRouter)
  .use("/post-travel", postTravelRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
