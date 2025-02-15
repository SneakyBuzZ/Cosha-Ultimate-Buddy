// @ts-expect-error: TypeScript expects a different type for the module declaration
// @typescript-eslint/no-unused-vars
import "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      name: string;
      email: string;
      image: string;
      oauthId: string;
      provider: string;
      refreshToken: string;
      accessToken: string;
      provider: string;
    };
  }
}
