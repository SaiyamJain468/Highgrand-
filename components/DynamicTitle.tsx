"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DynamicTitle() {
  const pathname = usePathname();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "come back to archive !!";
      } else {
        updateTitle();
      }
    };

    const updateTitle = () => {
      if (pathname === "/") {
        document.title = "HIGHGRAND ▲ | ARCHIVAL STREETWEAR";
      } else {
        const parts = pathname.split("/").filter(Boolean);
        const lastPart = parts[parts.length - 1] || "";
        
        const titlePrefix = lastPart
          .replace(/-/g, " ")
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        if (pathname.includes("/product/")) {
          document.title = `${titlePrefix.toUpperCase()} ▲ | HIGHGRAND ARCHIVE`;
        } else if (pathname.includes("/category/")) {
          document.title = `${titlePrefix.toUpperCase()} ▲ | HIGHGRAND`;
        } else {
          document.title = `${titlePrefix} ▲| HIGHGRAND`;
        }
      }
    };

    updateTitle();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pathname]);

  return null;
}
