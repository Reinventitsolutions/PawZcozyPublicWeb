import React from "react";

const page = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-surface-surfaceContainer rounded-3xl">
            <h1 className="text-3xl font-bold text-center mb-6 ">
                PawZcozy Privacy Policy
            </h1>
            <p className="mb-4">
                Thank you for using our mobile application (“App”). This Privacy
                Policy explains how we collect, use, and protect your
                information when you use our App.
            </p>

            <h2 className="text-2xl font-semibold mt-6">
                User Data Description:
            </h2>
            <p className="mb-4">
                We collect and process certain information when you use our App,
                including but not limited to your username, email address, and
                device information. This information is used to provide you with
                the services offered by the App and to improve your user
                experience.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Camera:</h2>
            <p className="mb-4">
                Our App may request access to your device’s camera to enable
                certain features such as capturing photos or videos. We do not
                store or access any media captured through your device’s camera
                without your explicit consent.
            </p>

            <h2 className="text-2xl font-semibold mt-6">
                User and Pet Location:
            </h2>
            <p className="mb-4">
                With your permission, our App may collect and process your
                location data to provide location-based services. This may
                include displaying nearby services or connecting you with other
                users in your area. Additionally, if you choose to use our
                pet-related features, we may also collect and process your pet’s
                location data to provide relevant services and functionalities.
            </p>

            <h2 className="text-2xl font-semibold mt-6">
                How to Delete User Account:
            </h2>
            <p className="mb-4">
                If you wish to delete your user account and associated data from
                our App, you can do so by accessing the account settings within
                the App. From there, you will have the option to delete your
                account permanently. Please note that deleting your account will
                result in the loss of all data associated with your account,
                including but not limited to your profile information and
                activity history.
            </p>

            <h2 className="text-2xl font-semibold mt-6">
                Changes to this Privacy Policy:
            </h2>
            <p className="mb-4">
                We reserve the right to update or modify this Privacy Policy at
                any time. Any changes will be effective immediately upon posting
                the updated Privacy Policy on this page. We encourage you to
                review this Privacy Policy periodically for any changes.
            </p>

            <p className="mb-4">
                If you have any questions or concerns about our Privacy Policy
                or the way we handle your information, please contact us at
                <a
                    href="mailto:pawzcozy@gmail.com"
                    className="text-primary hover:underline"
                >
                    {" "}
                    pawzcozy@gmail.com
                </a>
                .
            </p>
        </div>
    );
};

export default page;
