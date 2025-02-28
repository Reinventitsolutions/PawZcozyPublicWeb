import { Image } from "@nextui-org/image";

export default function page() {
  return (
    <>
      <div className="w-full flex compact:w-full compact:gap-8 compact:py-6 medium:flex-col expanded:flex-row large:w-4/5 extra-large:w-3/4 items-start justify-center py-16 gap-16 p-8">
        <div className="flex flex-col gap-8">
        <div className="text-4xl compact:text-4xl medium:text-5xl expanded:text-6xl large:text-6xl extra-large:text-7xl text-surface-foreground">

            About Us
          </div>
          <div className="text-sm compact:text-sm medium:text-base expanded:text-lg large:text-lg extra-large:text-xl text-secondary">
            At PawZcozy, we believe every pet deserves to shine! 🌟 Founded with
            a passion for pets and their unique stories, our platform is more
            than just a social app—it's a vibrant community where pet lovers
            come together to celebrate the joy, love, and companionship that
            pets bring to our lives.
          </div>
        </div>
        <div>
        <Image
  src="/images/about_pic.jpg"
  className="block compact:hidden medium:hidden expanded:block large:max-h-[300px] large:max-w-[550px] extra-large:max-h-[450px] extra-large:max-w-[650px]"
  removeWrapper
/>

        </div>
      </div>
      <div className="flex flex-col compact:flex-col medium:flex-col expanded:flex-row large:flex-row extra-large:flex-row justify-center items-stretch bg-surface-surfaceContainer border-y border-utils-outlineVariant">

        <div className="w-full flex flex-col gap-5 border-r-1 border-utils-outlineVariant compact:py-7 py-14 pr-14 pl-16">
          <div className="text-3xl">Our Mission</div>
          <div className="w-[30px] h-[3px] bg-primary"></div>
          <div className="text-lg text-surface-foreground font-light">
            To create a digital space where pets and their humans connect,
            share, and inspire. Whether it’s showcasing your pet’s adorable
            moments, finding new furry friends, or discovering trusted pet care
            tips, PawZcozy is here to make every pawprint count.
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 border-r-1 border-utils-outlineVariant compact:py-7 py-14  pr-14 pl-14">
          <div className="text-3xl">Why We Exist</div>
          <div className="w-[30px] h-[3px] bg-warning"></div>
          <div className="text-lg text-surface-foreground font-light">
            We know pets are family. They fill our lives with unconditional
            love, quirky antics, and unforgettable memories. PawZcozy is
            designed to make those moments last forever while connecting you
            with a like-minded community that understands your passion.
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 compact:py-7 py-14 pl-14 pr-16">
          <div className="text-3xl">Our Community</div>
          <div className="w-[30px] h-[3px] bg-success"></div>
          <div className="text-lg text-surface-foreground font-light">
            We are a growing family of pet enthusiasts, from doting dog parents
            to curious cat lovers and everyone in between. Together, we’re
            building a supportive and joyful space where every wag, purr, chirp,
            or splash is celebrated.
          </div>
        </div>
      </div>
    </>
  );
}
