"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TitleUpdater = ({ appName }: { appName: string }) => {
    const pathname = usePathname();

    const capitalizeFirstLetter = (string: string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
  
    const getRouteName = (pathname: string) => {
      if (pathname === "/") return "Home";
      return pathname
        .slice(1)
        .split("/")
        .map(segment => capitalizeFirstLetter(segment.replace(/-/g, " ")))
        .join(" - ");
    };
  
    useEffect(() => {
      const routeName = getRouteName(pathname!);
      document.title = `${appName} - ${routeName}`;
    }, [pathname, appName]);
  
    return null;
  };
  
  export default TitleUpdater;