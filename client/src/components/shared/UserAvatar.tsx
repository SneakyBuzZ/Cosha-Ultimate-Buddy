import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserAvatarPropsType } from "@/lib/types";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserAvatar({ className, image }: UserAvatarPropsType) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none ">
          <Avatar
            className={cn("size-10 border-2 border-neutral-800", className)}
          >
            <AvatarImage
              src={image || "https://github.com/shadcn.png"}
              alt="profile"
            />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-neutral-900 p-2 -translate-x-2">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
