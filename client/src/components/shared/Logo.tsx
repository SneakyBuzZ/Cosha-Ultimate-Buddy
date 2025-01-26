import { spaceGrotesk } from "@/lib/fonts";
import { LogoPropsType } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({
  showText = true,
  className,
  logoClass,
  textClassName,
}: LogoPropsType) => {
  return (
    <div className={cn("flex items-center gap-1 justify-start", className)}>
      <Image
        src="/assets/icons/logo.svg"
        height={30}
        width={30}
        alt="cosha"
        className={cn("w-40", logoClass)}
        priority
      />
      {showText && (
        <h4
          style={{ letterSpacing: "-0.08em" }}
          className={cn(
            "text-base md:text-xl lg:text-2xl text-neutral-700 dark:text-neutral-400",
            textClassName,
            spaceGrotesk.className
          )}
        >
          Cosha
        </h4>
      )}
    </div>
  );
};

export default Logo;
