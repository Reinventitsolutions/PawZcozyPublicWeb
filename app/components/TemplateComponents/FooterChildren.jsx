import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import NavBarTab from "../NavbarComponents/NavBarTab";
import Link from "next/link";

export default function FooterChildren() {
    return (
        <>
            <div className="w-full flex items-center justify-between">
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
                <div className="flex items-center gap-10 text-xl">
                    <NavBarTab name={"Home"} link={"/"} />
                    <NavBarTab name={"About us"} link={"/about"} />
                    <NavBarTab name={"Contact"} link={"/contact"} />
                    <NavBarTab name={"Features"} link={"/features"} />
                </div>
            </div>
            <Divider />
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center text-md gap-10">
                    <div>Copyright &copy;</div>
                    {/* <div>Privacy Policy</div> */}

                    <Link
                        href="/policy"
                        className="ml-4 hover:underline"
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
                <div className="flex items-center gap-10">
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
                </div>
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
