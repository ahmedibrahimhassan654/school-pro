import SiteHeader from "@/components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FrontLayout",
  description: "login page for school-pro",
};

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
