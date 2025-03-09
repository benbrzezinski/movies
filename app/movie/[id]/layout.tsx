import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies | Details",
};

export default function MovieDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
