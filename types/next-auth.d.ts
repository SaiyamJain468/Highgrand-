import "next-auth";
import { Role } from "@prisma/client";

declare module "next-auth" {
  interface User {
    role: Role;
    id: String;
  }
  interface Session {
    user: User & {
      role: Role;
      id: String;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: Role;
    id: String;
  }
}
