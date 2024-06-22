import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { ContactSection } from "./sections/ContactSection";
import { DesignSection } from "./sections/DesignSection";
import { FirstSection } from "./sections/FirstSection";
import { InfoSection } from "./sections/InfoSection";

export const Main = () => {
  useEffect(() => {
    AOS.init({
      // Opciones de AOS (opcional)
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <main className="flex-1">
      <FirstSection />
      <InfoSection />
      <DesignSection />

      <ContactSection />
    </main>
  );
};
