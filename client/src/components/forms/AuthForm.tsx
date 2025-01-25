"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

const AuthForm = () => {
  const handleAuthButton = (provider: string) => {
    signIn(provider, {
      callbackUrl: "/projects",
      redirect: false,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-10 border rounded-lg">
      <Button
        onClick={() => handleAuthButton("google")}
        variant={"outline"}
        className="flex items-center justify-center gap-5"
      >
        <FcGoogle /> <span>Continue with Google</span>
      </Button>
      <Button
        onClick={() => handleAuthButton("github")}
        variant={"outline"}
        className="flex items-center justify-center gap-5"
      >
        <FaGithub /> <span>Continue with Google</span>
      </Button>
    </div>
  );
};

export default AuthForm;
