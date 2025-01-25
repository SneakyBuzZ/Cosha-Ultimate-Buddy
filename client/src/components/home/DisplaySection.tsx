import { BorderBeam } from "@/components/ui/border-beam";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const DisplaySection = () => {
  return (
    <div className="container relative flex h-[600px] w-9/12 sm:w-11/12 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl px-6">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src="/assets/images/display.png"
          alt="display"
          fill
          className="w-full"
        />
      </AspectRatio>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
};

export default DisplaySection;
