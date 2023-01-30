import express from "express";
import cors from "cors";
import { loadEnv } from "./config/envs";

loadEnv();

const server = express();

server
  .use(cors())
  .use(express())
  .use("/status", (req, res) => res.send("OK!"));

export default server;
