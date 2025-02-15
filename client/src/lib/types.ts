import { Session } from "next-auth";
import { AuthUser } from "./interfaces";
import { Account } from "next-auth";

export type UserAvatarPropsType = {
  className?: string;
  image: string | null | undefined;
};

export type AnimatedPillPropsType = {
  className?: string;
  label: string;
};

export type SignInCallbackReturnType = {
  isAllowed: boolean | "redirectToLogin";
  user: AuthUser | null | undefined;
};

export type SignInCallbackType = {
  user: AuthUser;
  account: Account | null;
};

export type AuthSessionProviderPropsType = {
  children: React.ReactNode;
};

export type NavbarPropsType = {
  session: Session | null;
};

export type ModalPropsType = {
  title: string;
  description: string;
  children: React.ReactNode;
};
