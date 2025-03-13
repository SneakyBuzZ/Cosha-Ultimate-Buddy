import React from "react";
import { AnimatedPill } from "@/components/shared/AnimatedPill";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { splineSans } from "@/lib/fonts";

const HeroSection = () => {
  return (
    <main className="container flex flex-col items-center justify-center text-center gap-2 px-5 mx-auto py-24">
      <AnimatedPill label="Welcome to Cosha!" className="h-8" />
      <div
        className={cn(
          "flex flex-col justify-center items-center gap-3",
          splineSans.className
        )}
      >
        <h2
          className={cn(
            "text-5xl font-bold text-neutral-700 dark:text-neutral-400"
          )}
        >
          Revolutionize Your Git Workflow with AI.
        </h2>
        <h4
          className={cn("text-4xl font-medium text-orchid/70 dark:text-orchid")}
        >
          Ask , Summarize , Collaborate , and Commit
        </h4>
      </div>
      <h6
        style={{ letterSpacing: "-0.05em" }}
        className="text-2xl w-1/2 text-gray-500 mt-8"
      >
        AI-Powered Repo Insights, Real-Time Collaboration, and Seamless Commit
        Management – All in One Place.
      </h6>
      <div className="flex justify-center items-center gap-2">
        <Button className="px-10 mt-5 text-neutral-700 bg-neutral-300 border border-neutral-400/50">
          Join
        </Button>
        <Button className="px-10 mt-5 bg-orchid border border-orchid-dark hover:bg-orchid-dark">
          Join Us
        </Button>
      </div>
    </main>
  );
};

export default HeroSection;
