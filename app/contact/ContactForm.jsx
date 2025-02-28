// "use client";

// import InputField from "../components/OurOwn/InputField";
// import { boolean, object, string } from "yup";
// import { ErrorMessage, Formik } from "formik";
// import { Textarea } from "@nextui-org/input";
// import { Button, Checkbox } from "@nextui-org/react";







// export default function ContactForm() {
//   const inititalValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//     agreeToPrivacy: false,
//   };

//   const userSchema = object({
//     firstName: string().required("reqiured"),
//     lastName: string().required("reqiured"),
//     email: string()
//       .email("Please enter a valid email address")
//       .required("reqiured"),
//     message: string().required("reqiured"),
//     agreeToPrivacy: boolean()
//       .oneOf([true], "You must accept the privacy policy")
//       .required("You must accept the privacy policy"),
      

      
//   });


//   return (
//     <div className="flex items-center justify-between w-full">
//       <Formik
//         initialValues={inititalValues}
//         validationSchema={userSchema}
//         onSubmit={(values, { resetForm }) =>
//           handleEmailSubmit(values, resetForm)
//         }
//       >
//         {({
//           values,
//           setFieldValue,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form
//             className="items-start justify-evenly h-full w-full flex flex-col gap-6"
//             onSubmit={onsubmit}
//           >
//             <div className="w-full items-center justify-between flex gap-4">
//               <div className="w-1/2 flex flex-col gap-2">
//                 <div className="text-md font-semibold">First Name</div>
//                 <InputField
//                   type={"text"}
//                   variant={"flat"}
//                   // label={"First Name"}
//                   isClearable
//                   radius={"md"}
//                   size={"lg"}
//                   inputName={"firstName"}
//                   placeholder={"First name"}
//                   onClear={() =>
//                     setFieldValue("firstName", inititalValues.firstName, false)
//                   }
//                   onChange={(target) => handleChange(target)}
//                   onBlur={handleBlur}
//                   isInvalid={!!touched.firstName && !!errors.firstName}
//                   errorMessage={touched.firstName && errors.firstName}
//                   value={values.firstName}
//                 />
//               </div>
//               <div className="w-1/2 flex flex-col gap-2">
//                 <div className="text-md font-semibold">Last Name</div>
//                 <InputField
//                   type={"text"}
//                   variant={"flat"}
//                   // label={"Last Name"}
//                   isClearable
//                   radius={"md"}
//                   size={"lg"}
//                   inputName={"lastName"}
//                   placeholder={"Last name"}
//                   onClear={() =>
//                     setFieldValue("lastName", inititalValues.lastName, false)
//                   }
//                   onChange={(target) => handleChange(target)}
//                   onBlur={handleBlur}
//                   isInvalid={!!touched.lastName && !!errors.lastName}
//                   errorMessage={touched.lastName && errors.lastName}
//                   value={values.lastName}
//                 />
//               </div>
//             </div>
//             <div className="w-full flex flex-col gap-2">
//               <div className="text-md font-semibold">Email Address</div>
//               <InputField
//                 type={"email"}
//                 variant={"flat"}
//                 // label={"Email"}
//                 isClearable
//                 radius={"md"}
//                 size={"lg"}
//                 placeholder={"you@exmaple.com"}
//                 inputName={"email"}
//                 iconName={"email"}
//                 onClear={() =>
//                   setFieldValue("email", inititalValues.email, false)
//                 }
//                 onChange={(target) => handleChange(target)}
//                 onBlur={handleBlur}
//                 isInvalid={!!touched.email && !!errors.email}
//                 errorMessage={touched.email && errors.email}
//                 value={values.email}
//               />
//             </div>
//             <div className="w-full flex flex-col gap-2">
//               <div className="text-md font-semibold">Message</div>
//               <Textarea
//                 variant="flat"
//                 // label={"Address"}
//                 radius="md"
//                 size="lg"
//                 minRows={5}
//                 placeholder="Leave us message"
//                 name="message"
//                 value={values.message}
//                 onChange={(target) => handleChange(target)}
//                 onBlur={handleBlur}
//                 isInvalid={!!touched.message && !!errors.message}
//                 errorMessage={touched.message && errors.message}
//                 classNames={{
//                   label: [
//                     "!text-surface-onSurfaceVariant",
//                     "tracking-wider",
//                     "group-data-[invalid=true]:!text-danger",
//                   ],
//                   clearButton: ["text-primary"],
//                   innerWrapper: [
//                     "bg-transparent",
//                     "!text-surface-foreground",
//                     "group-data-[invalid=true]:!text-danger",
//                   ],
//                   input: [
//                     "!text-surface-foreground",
//                     "group-data-[invalid=true]:!text-danger",
//                     "placeholder:!text-surface-onSurfaceVariant tracking-wider",
//                   ],
//                   inputWrapper: [
//                     "bg-surface-surfaceContainer hover:!bg-surface-surfaceContainerHighest",
//                     "group-data-[invalid=true]:!bg-surface-surfaceContainer !text-danger",
//                     "shadow-none",
//                     "focus-within:!bg-surface-surfaceContainer",
//                     "!cursor-text",
//                   ],
//                   errorMessage: ["text-danger"],
//                 }}
//               />
//             </div>
//             <div className="w-full flex flex-col gap-2">
//               <div className="w-full flex items-center justify-start gap-3">
//                 <Checkbox
//                   isSelected={values.agreeToPrivacy}
//                   onChange={(e) =>
//                     setFieldValue("agreeToPrivacy", e.target.checked)
//                   }
//                 >
//                   I agree to the privacy policy
//                 </Checkbox>
//               </div>
//               <ErrorMessage
//                 name="agreeToPrivacy"
//                 component="div"
//                 className="text-danger"
//               />
//             </div>
//             <Button
//               variant="solid"
//               color="primary"
//               type="submit"
//               onSubmit={handleSubmit}
//               onPress={handleSubmit}
//               radius="full"
//               className="w-1/3 self-end"
//             >
//               Submit
//             </Button>
//           </form>
          
//         )}
//       </Formik>
//     </div>
//   );
// }
"use client";

import InputField from "../components/OurOwn/InputField";
import { boolean, object, string } from "yup";
import { ErrorMessage, Formik } from "formik";
import { Textarea } from "@nextui-org/input";
import { Button, Checkbox } from "@nextui-org/react";
import { useState } from "react";

export default function ContactForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const inititalValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeToPrivacy: false,
  };

  const userSchema = object({
    firstName: string().required("Required"),
    lastName: string().required("Required"),
    email: string()
      .email("Please enter a valid email address")
      .required("Required"),
    message: string().required("Required"),
    agreeToPrivacy: boolean()
      .oneOf([true], "You must accept the privacy policy")
      .required("You must accept the privacy policy"),
  });

  // const handleEmailSubmit = async (values, resetForm) => {
  //   const formData = new FormData();
  //   formData.append("access_key", "8fd78905-d4e2-4bfa-83b7-80f4c9f9746a"); // Replace with your Access Key
  //   formData.append("firstName", values.firstName);
  //   formData.append("lastName", values.lastName);
  //   formData.append("email", values.email);
  //   formData.append("message", values.message);

  //   try {
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const result = await response.json();

  //     if (result.success) {
  //       setSuccessMessage("Message sent successfully!");
  //       setErrorMessage("");
  //       resetForm();
  //     } else {
  //       setErrorMessage("Failed to send message. Please try again.");
  //       setSuccessMessage("");
  //     }
  //   } catch (error) {
  //     setErrorMessage("An error occurred. Please try again.");
  //     console.error(error);
  //   }
  // };

  return (
    <div className="flex items-center justify-between w-full">
      <Formik
        initialValues={inititalValues}
        validationSchema={userSchema}
        onSubmit={(values, { resetForm }) =>
          handleEmailSubmit(values, resetForm)
        }
      >
        {({
          values,
          setFieldValue,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form
            className="items-start justify-evenly h-full w-full flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <div className="w-full items-center justify-between flex gap-4">
              <div className="w-1/2 flex flex-col gap-2">
                <div className="text-md font-semibold">First Name</div>
                <InputField
                  type="text"
                  variant="flat"
                  isClearable
                  radius="md"
                  size="lg"
                  inputName="firstName"
                  placeholder="First name"
                  onClear={() =>
                    setFieldValue("firstName", inititalValues.firstName, false)
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!touched.firstName && !!errors.firstName}
                  errorMessage={touched.firstName && errors.firstName}
                  value={values.firstName}
                />
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <div className="text-md font-semibold">Last Name</div>
                <InputField
                  type="text"
                  variant="flat"
                  isClearable
                  radius="md"
                  size="lg"
                  inputName="lastName"
                  placeholder="Last name"
                  onClear={() =>
                    setFieldValue("lastName", inititalValues.lastName, false)
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!touched.lastName && !!errors.lastName}
                  errorMessage={touched.lastName && errors.lastName}
                  value={values.lastName}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="text-md font-semibold">Email Address</div>
              <InputField
                type="email"
                variant="flat"
                isClearable
                radius="md"
                size="lg"
                placeholder="you@example.com"
                inputName="email"
                onClear={() =>
                  setFieldValue("email", inititalValues.email, false)
                }
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!touched.email && !!errors.email}
                errorMessage={touched.email && errors.email}
                value={values.email}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="text-md font-semibold">Message</div>
              <Textarea
                variant="flat"
                radius="md"
                size="lg"
                minRows={5}
                placeholder="Leave us a message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!touched.message && !!errors.message}
                errorMessage={touched.message && errors.message}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex items-center justify-start gap-3">
                <Checkbox
                  isSelected={values.agreeToPrivacy}
                  onChange={(e) =>
                    setFieldValue("agreeToPrivacy", e.target.checked)
                  }
                >
                  I agree to the privacy policy
                </Checkbox>
              </div>
              <ErrorMessage
                name="agreeToPrivacy"
                component="div"
                className="text-danger"
              />
            </div>
            <Button
              variant="solid"
              color="primary"
              type="submit"
              radius="full"
              className="w-1/3 self-end"
            >
              Submit
            </Button>

            {/* Success/Error Messages */}
            {successMessage && (
              <div className="text-green-500">{successMessage}</div>
            )}
            {errorMessage && <div className="text-danger">{errorMessage}</div>}
          </form>
        )}
      </Formik>
    </div>
  );
}
