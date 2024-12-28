// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "./auth";

// Use NextAuth directly with the `authOptions`
const handler = NextAuth(authOptions);

// Export both GET and POST methods for NextAuth API
export { handler as GET, handler as POST };
