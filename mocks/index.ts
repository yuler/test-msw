import { setupServer } from "msw/node";
import { authHandlers } from "./auth";


const server = setupServer(
    ...authHandlers
);

server.listen({ onUnhandledRequest: "bypass" });
console.info("🔶 Mock server running");

process.once("SIGINT", () => server.close());
process.once("SIGTERM", () => server.close());