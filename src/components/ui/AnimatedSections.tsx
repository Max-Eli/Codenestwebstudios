"use client";

import React from "react";
import { FadeUp } from "@/components/ui/Motion";

export default function AnimatedSections({ children }: { children: React.ReactNode }) {
  const sections = React.Children.toArray(children);
  return (
    <>
      {sections.map((child, i) => (
        <FadeUp key={i} delay={i * 0.06} once>
          {child}
        </FadeUp>
      ))}
    </>
  );
}
