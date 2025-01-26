"use client";

import Navbar from "@/components/shared/Navbar";
import { useSession } from "next-auth/react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useSession();
  return (
    <>
      <section className="flex flex-col justify-start items-center w-full max-h-screen">
        <Navbar session={data} />
        {children}
      </section>
    </>
  );
}
