import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

const app = fastify();
const db = new PrismaClient();

export { app, db };
