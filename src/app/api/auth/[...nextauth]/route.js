import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import UserMode from "@/app/MongDB/model/UserMode";
import { DBConeectFuntion } from "@/app/MongDB/Mongodb";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const handler =NextAuth( {
  // Configure one or more authentication providers
  providers: [
  
  
  
  
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        //Check if the user exists.
        
        await DBConeectFuntion();

        try {
          const user = await UserMode.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages:{
error:"/dashboard/login"
  },
})

export {handler as GET,handler as POST}