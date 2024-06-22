import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-24"
      data-aos="zoom-out"
      data-aos-delay="100"
      id="Contact"
    >
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#86868b]">
            Stay Connected, Stay Inspired
          </h2>
          <p className="mx-auto max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Sign up to be the first to know about the latest updates and
            exclusive offers for the iPhone 15.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-lg flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-xs text-white dark:text-gray-400">
            By subscribing, you agree to our{" "}
            <Link
              href="#"
              className="underline underline-offset-2"
              prefetch={false}
            >
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
