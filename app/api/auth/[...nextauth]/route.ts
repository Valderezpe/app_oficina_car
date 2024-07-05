import { db } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOLE_CLIENT_ID as string,
      clientSecret: process.env.GPPGLE_CLIENT_SECRET as string,
    }),
  ],
});

export { handler as GET, handler as POST };
