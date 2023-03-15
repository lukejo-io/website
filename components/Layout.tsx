import { PropsWithChildren } from "react";
import Head from "next/head";
import LinkButton from "./LinkButton";
import Link from "next/link";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col w-full">
      <Link href={"/"}>
        <div className="flex h-24 w-full items-center justify-center border-b mb-3">
          <h1 className="text-5xl lg:text-6xl font-bold">Luke Johnson</h1>
        </div>
      </Link>
      <div className=" flex w-full flex-col items-center justify-center   bg-off-white">
        {children}
      </div>

      <footer className="flex h-24 w-full items-center justify-center border-t mt-3">
        Ⓒ2023 Luke Johnson
      </footer>
    </div>
  );
}

export default Layout;
