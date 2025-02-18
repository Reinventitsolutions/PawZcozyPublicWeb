"use client";

import InputField from "../components/OurOwn/InputField";
import { boolean, object, string } from "yup";
import { ErrorMessage, Formik } from "formik";
import { Textarea } from "@nextui-org/input";
import { Button, Checkbox } from "@nextui-org/react";

export default function ContactForm() {
  const inititalValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeToPrivacy: false,
  };

  const userSchema = object({
    firstName: string().required("reqiured"),
    lastName: string().required("reqiured"),
    email: string()
      .email("Please enter a valid email address")
      .required("reqiured"),
    message: string().required("reqiured"),
    agreeToPrivacy: boolean()
      .oneOf([true], "You must accept the privacy policy")
      .required("You must accept the privacy policy"),
  });
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
                  type={"text"}
                  variant={"flat"}
                  // label={"First Name"}
                  isClearable
                  radius={"md"}
                  size={"lg"}
                  inputName={"firstName"}
                  placeholder={"First name"}
                  onClear={() =>
                    setFieldValue("firstName", inititalValues.firstName, false)
                  }
                  onChange={(target) => handleChange(target)}
                  onBlur={handleBlur}
                  isInvalid={!!touched.firstName && !!errors.firstName}
                  errorMessage={touched.firstName && errors.firstName}
                  value={values.firstName}
                />
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <div className="text-md font-semibold">Last Name</div>
                <InputField
                  type={"text"}
                  variant={"flat"}
                  // label={"Last Name"}
                  isClearable
                  radius={"md"}
                  size={"lg"}
                  inputName={"lastName"}
                  placeholder={"Last name"}
                  onClear={() =>
                    setFieldValue("lastName", inititalValues.lastName, false)
                  }
                  onChange={(target) => handleChange(target)}
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
                type={"email"}
                variant={"flat"}
                // label={"Email"}
                isClearable
                radius={"md"}
                size={"lg"}
                placeholder={"you@exmaple.com"}
                inputName={"email"}
                iconName={"email"}
                onClear={() =>
                  setFieldValue("email", inititalValues.email, false)
                }
                onChange={(target) => handleChange(target)}
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
                // label={"Address"}
                radius="md"
                size="lg"
                minRows={5}
                placeholder="Leave us message"
                name="message"
                value={values.message}
                onChange={(target) => handleChange(target)}
                onBlur={handleBlur}
                isInvalid={!!touched.message && !!errors.message}
                errorMessage={touched.message && errors.message}
                classNames={{
                  label: [
                    "!text-surface-onSurfaceVariant",
                    "tracking-wider",
                    "group-data-[invalid=true]:!text-danger",
                  ],
                  clearButton: ["text-primary"],
                  innerWrapper: [
                    "bg-transparent",
                    "!text-surface-foreground",
                    "group-data-[invalid=true]:!text-danger",
                  ],
                  input: [
                    "!text-surface-foreground",
                    "group-data-[invalid=true]:!text-danger",
                    "placeholder:!text-surface-onSurfaceVariant tracking-wider",
                  ],
                  inputWrapper: [
                    "bg-surface-surfaceContainer hover:!bg-surface-surfaceContainerHighest",
                    "group-data-[invalid=true]:!bg-surface-surfaceContainer !text-danger",
                    "shadow-none",
                    "focus-within:!bg-surface-surfaceContainer",
                    "!cursor-text",
                  ],
                  errorMessage: ["text-danger"],
                }}
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
              onSubmit={handleSubmit}
              onPress={handleSubmit}
              radius="full"
              className="w-1/3 self-end"
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
