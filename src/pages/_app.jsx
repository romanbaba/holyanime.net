import "@/pages/assets/styles/globals.css";
import Navbar from "@/pages/components/navbar.jsx";
import Sidebar from "@/pages/components/sidebar.jsx";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { SessionProvider } from "next-auth/react";

/** @param {import("next/app").AppProps} params */
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
   <SessionProvider session={session}>
     <Theme className="pb-2">
      <Sidebar />
        <div className="w-full sm:pl-[22rem] overflow-hidden mr-12">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </Theme>
   </SessionProvider>
  );
}