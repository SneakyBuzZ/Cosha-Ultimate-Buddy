import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserAvatarPropsType } from "@/lib/types";
import { cn } from "@/lib/utils";

export function UserAvatar({ className, image }: UserAvatarPropsType) {
  return (
    <Avatar className={cn("size-10", className)}>
      <AvatarImage
        src={image || "https://github.com/shadcn.png"}
        alt="profile"
      />
      <AvatarFallback>Avatar</AvatarFallback>
    </Avatar>
  );
}
