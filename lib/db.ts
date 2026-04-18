import { PrismaClient } from "@prisma/client";

// Standard Prisma singleton for Next.js
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
};

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

// Lazy initialization using a Proxy to prevent build-time crashes during static analysis/metadata collection
const db = new Proxy({} as ReturnType<typeof prismaClientSingleton>, {
  get(target, prop) {
    if (typeof window !== "undefined") return undefined;
    if (!globalThis.prismaGlobal) {
      globalThis.prismaGlobal = prismaClientSingleton();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (globalThis.prismaGlobal as any)[prop];
  }
});

export default db;
