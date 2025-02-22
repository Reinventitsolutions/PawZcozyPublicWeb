import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import ContactForm from "./ContactForm";

export default function page() {
    return (
        <div className="w-full compact:flex-col medium:flex-col expanded:flex-row large:w-4/5 extra-large:w-3/4 flex items-stretch justify-center gap-8 h-auto p-6">
            <div className="w-full compact:w-full medium:w-full expanded:w-1/2 flex-1 p-6 compact:p-4 medium:p-6 rounded-3xl bg-surface-surfaceContainerLowest flex flex-col gap-4">
                <div className="text-primary text-md font-medium">
                    Get in Touch
                </div>
                <div className="text-surface-foreground text-5xl">
                    Let's chat, Reach out to Us
                </div>
                <div className="text-utils-outline text-md">
                    have questions or feedback? We're here to help. Send us a
                    message, and we'll respond within 24 hours.
                </div>
                <Divider />
                <ContactForm />
            </div>
            <div className="w-full compact:w-full medium:w-full expanded:w-1/2 flex-1 flex flex-col justify-between gap-8">
                <div className="flex flex-1 w-full items-center justify-center rounded-3xl bg-surface-surfaceContainer/50 overflow-hidden">
                    <Image
                        src="/images/contact_pic_3.jpg"
                        removeWrapper
                        className="object-cover h-full w-full compact:hidden medium:h-[300px] large:h-full"
                    />{" "}
                    {/*compact:h-[250px]*/}
                </div>
                <div className="w-full flex flex-col p-4 bg-surface-surfaceContainerLowest rounded-3xl gap-4">
                    <div className="w-full bg-surface-surfaceContainerLow rounded-2xl flex items-center justify-start gap-4 p-4">
                        <div className="p-2 flex items-center justify-center rounded-full bg-primary-primaryContainer text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-lg font-medium text-surface-foreground">
                                Email
                            </div>
                            <div className="text-sm text-utils-outline">
                                pawzcozy@gmail.com
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-full bg-surface-surfaceContainerLow rounded-2xl flex items-center justify-start gap-4 p-4"> */}
                    {/* <div className="p-2 flex items-center justify-center rounded-full bg-primary-primaryContainer text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div> */}
                    {/* <div className="flex flex-col">
                            <div className="text-lg font-medium text-surface-foreground">
                                Phone
                            </div>
                            <div className="text-sm text-utils-outline">
                                (323) 238-0684
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-surface-surfaceContainerLow rounded-2xl flex items-center justify-start gap-4 p-4">
                        <div className="p-2 flex items-center justify-center rounded-full bg-primary-primaryContainer text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div> */}
                    {/* <div className="flex flex-col">
                            <div className="text-lg font-medium text-surface-foreground">
                                Address
                            </div>
                            <div className="text-sm text-utils-outline">
                                909-1/2 E 49th St Los Angeles, California(CA),
                                90011
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}
