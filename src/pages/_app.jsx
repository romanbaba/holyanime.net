import cn from "@/functions/cn";
import "@/pages/assets/styles/globals.css";
import Navbar from "@/pages/components/navbar.jsx";
import Sidebar from "@/pages/components/sidebar.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ["latin"] });

/** @param {import("next/app").AppProps} params */
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
   <SessionProvider session={session}>
    <NextUIProvider className="pb-4">
      <main className={cn("flex", interFont.className, interFont.style)}>
        <Sidebar />
        <div className="w-full sm:pl-[22rem] overflow-hidden mr-12">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </main>
    </NextUIProvider>
   </SessionProvider>
  );
}