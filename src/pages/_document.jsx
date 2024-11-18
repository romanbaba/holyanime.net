import cn from "@/functions/cn.js";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr" className="dark">
      <Head />
      <body className={cn("min-h-screen bg-[#111113] text-[#edeef0]")}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}