import { type NextRequest, NextResponse } from "next/server";
import { FILTER_BY, SORT_BY, GENRES } from "@/constants";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const params = url.searchParams;
  let changed = false;

  if (!params.has("filter")) {
    params.set("filter", FILTER_BY[0].value);
    changed = true;
  }

  if (!params.has("sort")) {
    params.set("sort", SORT_BY[0].value);
    changed = true;
  }

  if (!params.has("genre")) {
    params.set("genre", GENRES[0].value);
    changed = true;
  }

  if (changed) {
    const newUrl = `${url.pathname}?${params.toString()}`;
    return NextResponse.redirect(new URL(newUrl, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
