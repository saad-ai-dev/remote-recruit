import { useMemo } from "react";

const applicationRoutes = ["/application", "/applications", "/invoice", "/invoices"];

export function useRoutePage(pathname = window.location.pathname) {
  return useMemo(() => {
    const normalizedPath = pathname.toLowerCase();

    if (applicationRoutes.some((route) => normalizedPath.startsWith(route))) {
      return "application";
    }

    return "landing";
  }, [pathname]);
}
