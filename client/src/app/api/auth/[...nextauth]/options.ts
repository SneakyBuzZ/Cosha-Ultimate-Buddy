import { handleSignInOption } from "@/app/api/auth/[...nextauth]/api";
import { AuthSession } from "@/lib/interfaces";
import { SignInCallbackType } from "@/lib/types";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
  },
  callbacks: {
    async signIn({ user, account }: SignInCallbackType) {
      let response = await handleSignInOption({
        user,
        account,
      });

      if (response.isAllowed === "redirectToLogin") {
        response = await handleSignInOption({
          user,
          account,
        });
      }

      user.id = response?.user?.id || user.id;
      user.name = response?.user?.name || user.name;
      user.email = response?.user?.email || user.email;
      user.image = response?.user?.image || user.image;
      user.oauthId = response?.user?.oauthId || user.oauthId;
      user.provider = response?.user?.name || user.name;
      user.accessToken = response?.user?.accessToken || user.accessToken;
      user.refreshToken = response?.user?.refreshToken || user.refreshToken;

      return response.isAllowed;
    },
    async session({ session, token }: { session: AuthSession; token: JWT }) {
      session.user = token;
      return session;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};
