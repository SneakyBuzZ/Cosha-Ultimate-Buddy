import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { AnimatedPillPropsType } from "@/lib/types";

export function AnimatedPill({ className, label }: AnimatedPillPropsType) {
  return (
    <div className={cn("z-10 flex items-center justify-center", className)}>
      <div
        className={cn(
          "group rounded-full border border-neutral-300 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 h-6 flex justify-center items-center w-52"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-800 hover:duration-300 hover:dark:text-neutral-400">
          <span className="text-sm">{label}</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
