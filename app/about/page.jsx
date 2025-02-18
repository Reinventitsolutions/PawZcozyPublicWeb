import { Image } from "@nextui-org/image";

export default function page() {
  return (
    <>
      <div className="extra-large:w-3/4 flex items-start justify-center py-16 gap-16 large:w-4/5">
        <div className="flex flex-col gap-8">
          <div className="extra-large:text-7xl large:text-6xl text-surface-foreground">
            About Us
          </div>
          <div className="extra-large:text-xl large:text-lg text-secondary">
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
            className="extra-large:max-h-[450px] extra-large:max-w-[650px] large:max-h-[300px] max-w-[550px]"
            removeWrapper
          />
        </div>
      </div>
      <div className="w-full flex items-stretch justify-center bg-surface-surfaceContainer border-y-1 border-utils-outlineVariant">
        <div className="w-full flex flex-col gap-5 border-r-1 border-utils-outlineVariant py-14 pr-14 pl-16">
          <div className="text-3xl">Our Mission</div>
          <div className="w-[30px] h-[3px] bg-primary"></div>
          <div className="text-lg text-surface-foreground font-light">
            To create a digital space where pets and their humans connect,
            share, and inspire. Whether it’s showcasing your pet’s adorable
            moments, finding new furry friends, or discovering trusted pet care
            tips, PawZcozy is here to make every pawprint count.
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 border-r-1 border-utils-outlineVariant py-14 pr-14 pl-14">
          <div className="text-3xl">Why We Exist</div>
          <div className="w-[30px] h-[3px] bg-warning"></div>
          <div className="text-lg text-surface-foreground font-light">
            We know pets are family. They fill our lives with unconditional
            love, quirky antics, and unforgettable memories. PawZcozy is
            designed to make those moments last forever while connecting you
            with a like-minded community that understands your passion.
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 py-14 pl-14 pr-16">
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
