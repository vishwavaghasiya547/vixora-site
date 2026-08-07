"use client";

import { cn } from "@/lib/utils";

export interface AnnouncementBarProps {
  children: React.ReactNode;
  className?: string;
}

export function AnnouncementBar({ children, className }: AnnouncementBarProps) {
  return (
    <div
      className={cn(
        "bg-white font-light py-3 w-full px-4 sticky top-0 z-[60] flex justify-center",
        className
      )}
    >
      <div className="max-w-[1410px] w-full flex items-center justify-center md:flex-row flex-col">
        <p className="min-h-6 text-center lg:text-left text-[14px] text-black flex items-center gap-2">
          {children}
        </p>
      </div>
    </div>
  );
}
