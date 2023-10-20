import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prismaClient } from "./prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: AuthOptions = {
    
        adapter: PrismaAdapter(prismaClient),
        providers: [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        ],

}