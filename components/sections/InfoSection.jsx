import videoSide from "@/components/visual_content/side-video.mp4";
import { ComponentIcon } from "@/icons/ComponentIcon";
import { NetworkIcon } from "@/icons/NetworkIcon";
import { PowerIcon } from "@/icons/PowerIcon";
import { TvIcon } from "@/icons/TvIcon";

export const InfoSection = () => {
  return (
    <section
      className=" py-8 md:py-16 lg:py-20 bg-[#101010]"
      id="Caracteristicas"
    >
      <div
        className="container grid items-center gap-4 px-4 md:grid-cols-1 lg:grid-cols-2 lg:gap-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl/tight lg:text-4xl  text-[#86868b] font-bold tracking-tighter ">
            Unlock the Power of the iPhone 15
          </h2>
          <p className="text-white md:text-xl/relaxed ">
            The iPhone 15 is more than just a phone - it's a gateway to a world
            of possibilities. Discover how this cutting-edge device can
            transform the way you work, play, and connect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <PowerIcon className="h-8 w-8" />
              <h3 className="text-md md:text-lg font-medium text-[#86868b]">
                Boost Productivity
              </h3>
              <p className="text-xs md:text-sm text-white ">
                Streamline your workflow with powerful productivity tools and
                seamless integration with your other devices.
              </p>
            </div>
            <div className="space-y-2">
              <TvIcon className="h-8 w-8" />
              <h3 className="text-md md:text-lg font-medium text-[#86868b]">
                Endless Entertainment
              </h3>
              <p className="text-xs md:text-sm text-white dark:text-gray-400">
                Immerse yourself in a world of entertainment with the iPhone
                15\'s stunning display and cutting-edge multimedia capabilities.
              </p>
            </div>
            <div className="space-y-2">
              <NetworkIcon className="h-8 w-8" />
              <h3 className="text-md md:text-lg font-medium text-[#86868b]">
                Seamless Connectivity
              </h3>
              <p className="text-xs md:text-sm text-white dark:text-gray-400">
                Stay connected with your loved ones and the world around you
                with the iPhone 15\'s advanced communication features.
              </p>
            </div>
            <div className="space-y-2">
              <ComponentIcon className="h-8 w-8" />
              <h3 className="text-md md:text-lg font-medium text-[#86868b]">
                Personalize Your Experience
              </h3>
              <p className="text-xs md:text-sm text-white dark:text-gray-400">
                Tailor the iPhone 15 to your unique needs and preferences with a
                wide range of customization options.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-y-4 bg-black relative rounded-[28px] pt-6 h-[300px] sm:h-[500px] w-full max-w-[800px] mx-auto">
          <video
            autoPlay
            muted
            loop
            height="auto"
            width="800px"
            className="absolute bottom-0 rounded-[28px] "
          >
            <source src={videoSide} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
