import { PropsWithChildren } from "react";
import Head from "next/head";
import LinkButton from "./LinkButton";
import Link from "next/link";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Link href={"/"}>
        <div className="flex h-24 w-full items-center justify-center border-b">
          <h1 className="text-5xl lg:text-6xl font-bold">Luke Johnson</h1>
        </div>
      </Link>
      <div className="flex flex-grow flex-col items-center justify-center">
        {children}
      </div>

      <footer className="flex h-24 w-screen mt-auto items-center justify-center border-t">
        Ⓒ2023 Luke Johnson
      </footer>
    </div>
  );
}

export default Layout;
