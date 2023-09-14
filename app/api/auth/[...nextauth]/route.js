import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github"

import { connectToDB } from "@utils/database";
import User from "@models/user";

// console.log({ clientId: process.env.GOOGLE_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET });
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GitHubProvider({
        clientId : process.env.GITHUB_ID,
        clientSecret : process.env.GITHUB_CLIENT_SECRET
    }

    )


  ],

  callbacks: {
    async session({ session }) {
   
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },

    async signIn({ profile }) {

      console.log(profile);
      try {
        await connectToDB();

          // check if a user already exists in the database

          const userExist = await User.findOne({
            email: profile.email
          });

          // // if not, create a new user

          if (!userExist) {
            await User.create({
              email: profile.email,
              userName: profile.name,
              image: profile.picture
            });
          }

        return true


      } catch (error) {
        console.log(error);
        return false
      }
    },
  },
});

export { handler as GET, handler as POST };
