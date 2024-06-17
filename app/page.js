import videoSrc from "@/app/main-video.mp4";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-black">
      <header className="bg-black px-4 md:px-6 py-2 flex items-center justify-between shadow-sm ">
        <Link href="#" className="flex items-center" prefetch={false}>
          <AppleIcon className="h-6 w-6 text-white" />
        </Link>
        <nav className="hidden md:flex items-center space-x-10">
          <Link
            href="#"
            className="text-white hover:text-gray-300  font-light text-sm"
            prefetch={false}
          >
            Características
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300  font-light text-sm"
            prefetch={false}
          >
            Diseño
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300  font-light text-sm"
            prefetch={false}
          >
            Precios
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300  font-light text-sm"
            prefetch={false}
          >
            Contacto
          </Link>
        </nav>
        <div></div>
      </header>
      <main className="flex-1">
        <section className="w-ful">
          {/* <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10"> */}
          <div className="text-center p-4">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#86868b] ">
              Introducing the iPhone 15
            </h1>
          </div>
          <div className="flex flex-col gap-4 items-center place-content-center">
            <div className="space-y-4">
              {/* <img
                src="/placeholder.svg"
                width={600}
                height={600}
                alt="iPhone 15"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              /> */}
              <video
                autoPlay
                loop
                muted
                height="680px"
                width="auto"
                className="rounded-[28px]"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-auto items-center place-content-center">
              <Link href="#" prefetch={false}>
                <button
                  type="button"
                  class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full text-sm px-8 py-4 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  Buy
                </button>
              </Link>
              <p className="w-[400px] text-white text-center pt-6 pb-12">
                From $999 or $41.62/mo. for 24 mo.1
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#101010] dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Designed to Inspire
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                The iPhone 15 is a masterpiece of design, crafted with precision
                and attention to detail. From its sleek, iconic silhouette to
                its stunning display, every element has been carefully
                considered to deliver an unparalleled user experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <DiscIcon className="h-8 w-8" />
                  <h3 className="text-lg font-medium">Stunning Display</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Immerse yourself in a vibrant, high-resolution display that
                    brings your content to life.
                  </p>
                </div>
                <div className="space-y-2">
                  <CameraIcon className="h-8 w-8" />
                  <h3 className="text-lg font-medium">Advanced Camera</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Capture stunning photos and videos with the industry-leading
                    camera system.
                  </p>
                </div>
                <div className="space-y-2">
                  <BatteryIcon className="h-8 w-8" />
                  <h3 className="text-lg font-medium">Powerful Battery</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Enjoy all-day battery life and fast charging for
                    uninterrupted productivity.
                  </p>
                </div>
                <div className="space-y-2">
                  <PowerIcon className="h-8 w-8" />
                  <h3 className="text-lg font-medium">
                    Unparalleled Performance
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Experience lightning-fast performance with the latest
                    processor and advanced technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="/placeholder.svg"
                width={600}
                height={600}
                alt="iPhone 15 Features"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Stay Connected, Stay Inspired
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
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
              <p className="text-xs text-gray-500 dark:text-gray-400">
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
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2024 Apple Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Legal
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function AppleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function BatteryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  );
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function DiscIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}
