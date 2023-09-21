import { Elysia } from "elysia";
import figlet from "figlet";

const app = new Elysia().get("/", () => {
  const body = figlet.textSync("Hello Elysia");
  return body;
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
