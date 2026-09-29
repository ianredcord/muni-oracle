"use client";

import { useEffect, useRef } from "react";
import { fasciaPointContent } from "./content";
import { initializeFasciaPoint } from "./interactions";

export default function FasciaPointClient() {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = container.current?.querySelector(".fp-page");
    return initializeFasciaPoint(root);
  }, []);
  return <div ref={container} lang="zh-TW" dangerouslySetInnerHTML={{ __html: fasciaPointContent }} />;
}
