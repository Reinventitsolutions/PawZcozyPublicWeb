import AndroidPhone from "../phones/AndroidPhone";
import AndroidPhone1 from "../phones/AndroidPhone1";
// import Iphone from "../phones/Iphone";
import RatingStars from "../Rating/RatingStars";

import Image from "next/image";


export default function HeroSection() {
  return (
    <div className="w-4/5 flex gap-10 items-start compact:flex-col">
      <div className="flex items-center w-full compact:max-w-full medium:max-w-[750px]">
        <div className="flex flex-col gap-8 compact:gap-6">
          <div className="flex flex-col gap-3">
            <div className="compact:text-4xl medium:text-5xl large:text-6xl extra-large:text-6xl text-surface-foreground">
              Download PawZcozy
            </div>
            <div className="text-medium text-utils-outline pr-10">
              Join the ultimate platform to showcase your pet, connect with
              other animal lovers, and be part of a vibrant, furry community.
            </div>
            <div className="text-xd text-utils-outline">
              Your Pet&apos;s New Favorite Hangout Awaits!
            </div>
          </div>
          <div className="w-full bg-surface rounded-3xl flex flex-col p-5 pr-10 gap-7">
            <div className="flex flex-col w-full gap-3">
              <div className="flex flex-col w-full">
                <div className="text-xl text-surface-foreground">
                  Mobile
                </div>
                <div className="text-2xl text-surface-foreground font-semibold">
                  Android / IOS
                </div>
              </div>
              <div className="text-medium text-utils-outline">
                Download PowzyCozy Today! Unleash Fun, Build a Pet Community and
                Celebrate Every Furry Moment!
              </div>
            </div>
            <div className="flex items-center justify-start gap-4">
              <div className="rounded-md overflow-hidden">
                <Image src={"/images/google_play.png"} alt="google_play" width={150} height={50} />
              </div>
              <div className="rounded-md overflow-hidden">
                <Image src={"/images/app_store.png"} alt="app_store" width={150} height={50} />
              </div>
            </div>
            <div className="flex items-center justify-start text-primary gap-3">
              <RatingStars />
              <div className="text-xl text-surface-foreground flex items-center">
                100+
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex compact:flex-col compact:gap-6 medium:flex-row medium:gap-10 gap-4 items-center justify-center w-full">
        <AndroidPhone />
        <AndroidPhone1 />
        {/* <Iphone /> */}
      </div>
    </div>
  );
}
