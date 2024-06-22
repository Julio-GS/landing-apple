"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-black scroll-smooth">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
