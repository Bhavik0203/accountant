"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border-2 bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] pb-10 w-full items-center justify-center overflow-hidden "
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.googleDocs />
          </Circle>
        </div>
        <div className="flex flex-row  justify-between">
          <Circle ref={div2Ref}>
            <Icons.notion />
          </Circle>
          <Circle ref={div4Ref} className="size-12 rounded-xl border">
            <Icons.openai />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.zapier />
          </Circle>
        </div>
        
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.messenger />
          </Circle>
        </div>
        
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  notion: () => (
    <Image
      src="/images/ci1.png"
      alt="Notion"
      width={48}
      height={48}
      className="w-12 h-12"
    />
  ),
  openai: () => (
    <Image
      src="/images/ci-d.png"
      alt="OpenAI"
      width={48}
      height={48}
      className="w-12 h-12"
    />
  ),
  googleDrive: () => (
    <Image
      src="/images/ci1.png"
      alt="Google Drive"
      width={48}
      height={48}
      className="w-12 h-12"
    />
  ),
  whatsapp: () => (
    <Image
      src="/images/ci2.png"
      alt="WhatsApp"
      width={48}
      height={48}
      className="w-12 h-12"
    />
  ),
  googleDocs: () => (
    <Image
      src="/images/ci3.png"
      alt="Google Docs"
      width={48}
      height={48}
      className="w-12 h-12"
    />
  ),
  zapier: () => (
    <Image
      src="/images/ci4.png"
      alt="Zapier"
      width={48}
      height={48}
      className="w-12 h-12"
    />
  ),
  messenger: () => (
    <Image
      src="/images/ci4.png"
      alt="Messenger"
      width={48}
      height={48}
      className="w-12 h-12"
    />
  
 
  ),
};
