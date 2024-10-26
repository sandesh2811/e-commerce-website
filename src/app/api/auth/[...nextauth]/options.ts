import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Your username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials) {
        // For a successful sign in we need to return user

        const response = await fetch("http://localhost:3000/api/signupform", {
          method: "GET",
        });
        const data = await response.json();

        let user;

        if (response.ok) {
          user = data.users.find((user: any) => {
            if (
              credentials?.username === user.userName &&
              credentials?.password === user.password
            ) {
              return user;
            } else {
              return null;
            }
          });
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },

    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },

  pages: {
    signIn: "/signin",
  },
};
