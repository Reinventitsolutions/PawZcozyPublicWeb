import NextTopLoader from "nextjs-toploader";
import HeroSection from "./components/HomeComponents/HeroSection";
import Testimonials from "./components/HomeComponents/Testimonials";

export default function Home() {
  return (
    <div
      className="flex items-center pt-2 justify-end w-full h-full bg-surface-surfaceContainer overflow-hidden compact:pt-4"
      style={{
        borderBottomLeftRadius: "40px",
        borderBottomRightRadius: "40px",
      }}
    >
      <div className="flex flex-col items-end w-full gap-10 compact:items-center">
        <HeroSection />
        <div className="flex items-center justify-end w-full bg-surface compact:justify-center">
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
