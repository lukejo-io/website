import { PropsWithChildren } from "react";
import Head from "next/head";
import LinkButton from "./LinkButton";
import Link from "next/link";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Link href={"/"}>
        <div className="flex h-24 w-screen items-center justify-center border-b">
          <h1 className="text-6xl font-bold">Luke Johnson</h1>
        </div>
      </Link>
      <main className="flex w-full flex-1 flex-col items-center justify-center lg:px-20 text-center bg-off-white">
        {children}
      </main>

      <footer className="flex h-24 w-screen items-center justify-center border-t">
        Ⓒ2023 Luke Johnson
      </footer>
    </div>
  );
}

export default Layout;
