import Logo from "@/components/shared/Logo";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { NavbarPropsType } from "@/lib/types";
import Link from "next/link";
import AuthModal from "@/components/shared/AuthModal";
import { Button } from "@/components/ui/button";

const Navbar = ({ session }: NavbarPropsType) => {
  return (
    <nav className="w-full flex justify-between items-center px-3 md:px-8 py-3 border-b border-b-neutral-200 dark:border-b-neutral-800 bg-neutral-100 dark:bg-neutral-950/10 glassmorphic">
      <Link href={"/"} passHref>
        <Logo className="w-[105px] cursor-pointer" withText />
      </Link>
      {session ? (
        <>
          <div className="flex items-center justify-center gap-4">
            <UserAvatar
              image={session.user?.image}
              className="size-8 sm:size-9 md:size-10"
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center gap-1">
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
