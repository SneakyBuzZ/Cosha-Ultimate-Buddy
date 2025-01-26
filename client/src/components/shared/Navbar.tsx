import Logo from "@/components/shared/Logo";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { NavbarPropsType } from "@/lib/types";
import Link from "next/link";
import AuthModal from "@/components/shared/AuthModal";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { ToggleTheme } from "@/components/shared/ToggleTheme";

const Navbar = ({ session }: NavbarPropsType) => {
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <nav className="z-50 w-full h-[20%] flex justify-between items-center px-3 md:px-8 py-3 border-b border-b-neutral-200 dark:border-b-neutral-700 bg-neutral-100 dark:bg-neutral-950">
      <Logo logoClass="w-6 sm:w-8" textClassName="text-xl sm:text-2xl" />
      {session ? (
        <>
          <div className="flex items-center justify-center gap-4">
            <ToggleTheme />

            <UserAvatar
              image={session.user?.image}
              className="size-8 sm:size-9 md:size-10"
            />
            <Button
              className="bg-neutral-900 border border-neutral-900 text-neutral-500"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center gap-1">
            <ToggleTheme />

            <Link href="" className="text-xs md:text-sm mr-3">
              <FaGithub className="h-5 w-5" />
            </Link>
            <Button variant={"ghost"}>Login</Button>
            <AuthModal
              title="Join the Conversation"
              description="Create an account to connect with friends, chat in real-time, and explore exciting conversations. Let's get started!"
            >
              <span className="h-7 md:h-8 text-xs md:text-sm w-16 md:w-20 bg-orchid border border-orchid-dark text-white py-[6px] md:py-2 px-2 md:px-4 rounded-md">
                Join Now
              </span>
            </AuthModal>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
