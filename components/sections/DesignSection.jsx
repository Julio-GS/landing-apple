import videoSection from "@/components/visual_content/main-video.mp4";
import { BatteryIcon } from "@/icons/BatteryIcon";
import { CameraIcon } from "@/icons/CameraIcon";
import { DiscIcon } from "@/icons/DiscIcon";
import { PowerIcon } from "@/icons/PowerIcon";

export const DesignSection = () => {
  return (
    <section
      className=" py-8 md:py-16 lg:pt-12 lg:pb-[10rem] bg-[#101010] dark:bg-gray-800"
      id="Design"
    >
      <div
        className="container grid items-center gap-4 px-4 md:grid-cols-1 lg:grid-cols-2 lg:gap-8"
        data-aos="fade-up"
      >
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl/tight lg:text-4xl font-bold tracking-tighter  text-[#86868b]">
            Designed to Inspire
          </h2>
          <p className=" md:text-xl/relaxed text-white">
            The iPhone 15 is a masterpiece of design, crafted with precision and
            attention to detail. From its sleek, iconic silhouette to its
            stunning display, every element has been carefully considered to
            deliver an unparalleled user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <DiscIcon className="h-8 w-8" />
              <h3 className="text-md md:text-lg font-medium text-[#86868b]">
                Stunning Display
              </h3>
              <p className="text-xs md:text-sm text-white dark:text-gray-400">
                Immerse yourself in a vibrant, high-resolution display that
                brings your content to life.
              </p>
            </div>
            <div className="space-y-2">
              <CameraIcon className="h-8 w-8" />
              <h3 className="text-md md:text-lg font-medium text-[#86868b]">
                Advanced Camera
              </h3>
              <p className="text-xs md:text-sm text-white dark:text-gray-400">
                Capture stunning photos and videos with the industry-leading
                camera system.
              </p>
            </div>
            <div className="space-y-2">
              <BatteryIcon className="h-8 w-8" />
              <h3 className="text-md md:text-lg font-medium text-[#86868b]">
                Powerful Battery
              </h3>
              <p className="text-xs md:text-sm text-white dark:text-gray-400">
                Enjoy all-day battery life and fast charging for uninterrupted
                productivity.
              </p>
            </div>
            <div className="space-y-2">
              <PowerIcon className="h-8 w-8" />
              <h3 className="text-md md:text-lg font-medium text-[#86868b]">
                Unparalleled Performance
              </h3>
              <p className="text-xs md:text-sm text-white dark:text-gray-400">
                Experience lightning-fast performance with the latest processor
                and advanced technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-y-4 bg-black relative rounded-[28px] h-[300px] sm:h-[500px] w-full max-w-[800px] mx-auto ">
          <video
            autoPlay
            muted
            loop
            height="auto"
            width="800px"
            className=" h-full w-full object-cover rounded-[28px]"
          >
            <source src={videoSection} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
