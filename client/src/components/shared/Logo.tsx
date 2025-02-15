import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoPropsType = {
  className?: string;
  withText?: boolean;
};

const Logo = ({ className, withText }: LogoPropsType) => {
  if (withText) {
    return (
      <Image
        src="/assets/icons/logo-text.svg"
        height={30}
        width={30}
        alt="cosha"
        className={cn(className)}
        priority
      />
    );
  }

  return (
    <Image
      src="/assets/icons/logo.svg"
      height={30}
      width={30}
      alt="cosha"
      className={cn(className)}
      priority
    />
  );
};

export default Logo;
