import videoSrc from "@/components/visual_content/main.mp4";
import Link from "next/link";
export const FirstSection = () => {
  return (
    <section
      className="w-full h-[650px] sm:h-[900px] flex flex-col items-center justify-center bg-black text-center md:text-left pb-6 md:p-8 sm:pt-6 "
      data-aos="fade-up"
    >
      <div className="text-center p-4">
        <h1
          className="text-2xl md:text-3xl/tight lg:text-4xl font-bold tracking-tighter text-[#878684] mx-auto"
          data-aos="fade-right"
        >
          Introducing the iPhone 15
        </h1>
      </div>
      <div className="flex flex-col gap-4 items-center place-content-center">
        <div className="space-y-4">
          <video
            autoPlay
            muted
            className="max-h-[400px] w-full  rounded-[28px]"
            style={{ aspectRatio: "16 / 9" }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          className="flex flex-col items-center place-content-center text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Link href="#" prefetch={false}>
            <button
              type="button"
              class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full text-sm px-8 py-4 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              Buy
            </button>
          </Link>
          <p className="w-full md:w-[400px] text-white text-center pt-6 pb-12">
            From $999 or $41.62/mo. for 24 mo.1
          </p>
        </div>
      </div>
    </section>
  );
};
