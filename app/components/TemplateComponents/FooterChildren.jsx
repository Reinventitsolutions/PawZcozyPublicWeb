import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import NavBarTab from "../NavbarComponents/NavBarTab";
import Link from "next/link";

export default function FooterChildren() {
    return (
        <>
             <div className="w-full flex flex-col compact:flex-col medium:flex-row expanded:flex-row large:flex-row extra-large:flex-row items-center justify-between gap-2 compact:gap-4 medium:gap-6 expanded:gap-8 large:gap-10 extra-large:gap-12 text-sm compact:text-xs medium:text-sm expanded:text-base large:text-lg extra-large:text-xl">
                <div className="flex items-center gap-3">
                    <Link href="/" className="w-[50px] h-[50px] flex  rounded-full items-center justify-center">
                        <Image
                            src={"/logos/logo.png"}
                            width={"40"}
                            height={"40"}
                            alt="logo"
                        />
                    </Link>
                    <Link href="/" className="text-2xl cursor-pointer text-surface-foreground">
                        PawZcozy
                    </Link>
                </div>
                <div className="flex items-center gap-10 text-xl compact:gap-7 compact:text-md">
                    <NavBarTab name={"Home"} link={"/"} />
                    <NavBarTab name={"About us"} link={"/about"} />
                    <NavBarTab name={"Contact"} link={"/contact"} />
                    <NavBarTab name={"Features"} link={"/features"} />
                </div>
            </div>
            <Divider />
            <div className="w-full flex items-center justify-between medium:p-3 medium:gap-5 compact:flex-col compact:gap-5">
                <div className="flex items-center text-md gap-10 medium:gap-5">
                    <div className="whitespace-nowrap">Copyright &copy;</div>
                    {/* <div>Privacy Policy</div> */}

                    <Link
                        href="/policy"
                        className="ml-4 hover:underline whitespace-nowrap"
                    >
                        Privacy Policy
                    </Link>

                    <Link
                        href="/eula"
                        className="ml-4 hover:underline"
                    >
                        EULA
                    </Link>
                </div>
                <div className="flex items-center gap-10 medium:gap-5">
                    <Button
                        isIconOnly
                        variant="light"
                        color="primary"
                        radius="md"
                        className="p-1"
                    >
                        <Image
                            src="/logos/facebook-original.svg"
                            width={"85%"}
                            removeWrapper
                        />
                    </Button>
                    <Button
                        isIconOnly
                        variant="light"
                        color="primary"
                        radius="md"
                        className="p-1"
                    >
                        <Image
                            src="/logos/twitter-original.svg"
                            width={"85%"}
                            removeWrapper
                        />
                    </Button>
                    <Button
                        isIconOnly
                        variant="light"
                        color="primary"
                        radius="md"
                        className="p-1"
                    >
                        <Image
                            src="/logos/instaram_logo.svg"
                            width={"100%"}
                            removeWrapper
                        />
                    </Button>
                </div >
                <Button
                    variant="light"
                    color="primary"
                    radius="full"
                    as={Link}
                    href="https://mail.google.com/mail/?view=cm&to=pawzcozy@gmail.com"
                    target="_blank"
                    startContent={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                        >
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                    }
                >
                    pawzcozy@gmail.com
                </Button>
            </div>
        </>
    );
}
// import { Divider } from "@nextui-org/divider";
// import { Button } from "@nextui-org/button";
// import { Image } from "@nextui-org/image";
// import NavBarTab from "../NavbarComponents/NavBarTab";
// import Link from "next/link";

// export default function FooterChildren() {
//     return (
//         <>
//             <div className="w-full flex flex-col compact:flex-col medium:flex-row expanded:flex-row large:flex-row extra-large:flex-row items-center justify-between gap-2 compact:gap-4 medium:gap-6 expanded:gap-8 large:gap-10 extra-large:gap-12 text-sm compact:text-xs medium:text-sm expanded:text-base large:text-lg extra-large:text-xl">
//                 <div className="flex items-center gap-2 compact:gap-3 medium:gap-4 expanded:gap-5 large:gap-6 extra-large:gap-8">
//                     <Link href="/" className="w-[40px] h-[40px] flex rounded-full items-center justify-center">
//                         <Image
//                             src={"/logos/logo.png"}
//                             width={"30"}
//                             height={"30"}
//                             alt="logo"
//                         />
//                     </Link>
//                     <Link href="/" className="text-xl compact:text-lg medium:text-xl expanded:text-2xl large:text-3xl extra-large:text-4xl cursor-pointer text-surface-foreground">
//                         PawZcozy
//                     </Link>
//                 </div>
//                 <div className="flex flex-wrap justify-center gap-2 compact:gap-4 medium:gap-6 expanded:gap-8 large:gap-10 extra-large:gap-12 text-sm compact:text-xs medium:text-sm expanded:text-base large:text-lg extra-large:text-xl">
//                     <NavBarTab name={"Home"} link={"/"} />
//                     <NavBarTab name={"About us"} link={"/about"} />
//                     <NavBarTab name={"Contact"} link={"/contact"} />
//                     <NavBarTab name={"Features"} link={"/features"} />
//                 </div>
//             </div>
//             <Divider />
//             <div className="w-full flex flex-col compact:flex-row medium:flex-row expanded:flex-row large:flex-row extra-large:flex-row items-center justify-between gap-2 compact:gap-4 medium:gap-6 expanded:gap-8 large:gap-10 extra-large:gap-12 text-center compact:text-left medium:text-left expanded:text-left large:text-left extra-large:text-left text-xs compact:text-xs medium:text-sm expanded:text-base large:text-lg extra-large:text-xl">
//                 <div className="flex flex-wrap justify-center items-center gap-2 compact:gap-4 medium:gap-6 expanded:gap-8 large:gap-10 extra-large:gap-12">
//                     <div>Copyright &copy;</div>
//                     <Link href="/policy" className="hover:underline">Privacy Policy</Link>
//                     <Link href="/eula" className="hover:underline">EULA</Link>
//                 </div>
//                 <div className="flex flex-wrap justify-center items-center gap-2 compact:gap-4 medium:gap-6 expanded:gap-8 large:gap-10 extra-large:gap-12">
//                     <Button isIconOnly variant="light" color="primary" radius="md" className="p-1">
//                         <Image src="/logos/facebook-original.svg" width={"80%"} removeWrapper />
//                     </Button>
//                     <Button isIconOnly variant="light" color="primary" radius="md" className="p-1">
//                         <Image src="/logos/twitter-original.svg" width={"80%"} removeWrapper />
//                     </Button>
//                     <Button isIconOnly variant="light" color="primary" radius="md" className="p-1">
//                         <Image src="/logos/instaram_logo.svg" width={"90%"} removeWrapper />
//                     </Button>
//                 </div>
//                 <Button
//                     variant="light"
//                     color="primary"
//                     radius="full"
//                     as={Link}
//                     href="https://mail.google.com/mail/?view=cm&to=pawzcozy@gmail.com"
//                     target="_blank"
//                     startContent={
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                             className="size-5 compact:size-4 medium:size-5 expanded:size-6 large:size-7 extra-large:size-8"
//                         >
//                             <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
//                             <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
//                         </svg>
//                     }
//                 >
//                     pawzcozy@gmail.com
//                 </Button>
//             </div>
//         </>
//     );
// }
