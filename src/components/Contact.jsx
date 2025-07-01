import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";

// ✅ Yup schema with updated mobile number validation
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Only alphabets are allowed")
    .required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .test("is-valid-phone", "Enter a valid mobile number", (value) => {
      if (!value) return false;
      const localNumber = value.replace(/^\+\d+\s?/, "").replace(/\D/g, ""); // remove country code and non-digits
      return localNumber.length >= 7 && localNumber.length <= 12; // local numbers vary by country
    }),
});

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});
  const [phoneTouched, setPhoneTouched] = useState(false);

  const validateField = async (fieldName, value) => {
    try {
      await Yup.reach(validationSchema, fieldName).validate(value);
      setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [fieldName]: err.message }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;

    if (name === "mobile") {
      filteredValue = value; // Don't strip anything here, PhoneInput formats it
    } else if (name === "fullName") {
      filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormValues((prev) => ({ ...prev, [name]: filteredValue }));
    if (["fullName", "email", "mobile"].includes(name)) {
      validateField(name, filteredValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({});

      // Optional: clean mobile for submission
      const cleanedData = {
        ...formValues,
        mobile: formValues.mobile.replace(/\D/g, ""),
      };

      console.log("Submitted data:", cleanedData);
      localStorage.setItem("ContactDetails", JSON.stringify(cleanedData));

      setSuccessMsg("Form submitted successfully !");
      setFormValues({
        fullName: "",
        email: "",
        mobile: "",
      });

      setTimeout(() => {
        setSuccessMsg("");
      }, 10000);
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      setSuccessMsg("");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="container">
          <h2 className="mb-5 fw-bold text-center contact-title mb-5">
            Contact Us
          </h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 left_content">
            <h1 className="h1-title mb-3">
              Break the Cycle of Costly, Ineffective Support Operations
            </h1>
            <div className="content get_a_demo_1">
              <p>
                In this 30-minute call, we’ll first understand the challenges
                your team is currently facing and then proceed with the best
                course of action.
              </p>
              <p>Our experts will:</p>
              <ul>
                <li>Listen to your current CX pain points and goals</li>
                <li>
                  Demonstrate how TheLoops can help you overcome specific
                  challenges by replacing ineffective, manual tasks and
                  processes
                </li>
              </ul>
              <p>
                <strong>Book a call now to learn more.</strong>
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 right_content">
            <div className="form_section">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="w-100 contact-form-container"
              >
                {successMsg && (
                  <div className="alert alert-success w-100 text-center fw-semibold mb-4">
                    {successMsg}
                  </div>
                )}

                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className={`form-control ${
                      errors.fullName ? "is-invalid" : ""
                    }`}
                    value={formValues.fullName}
                    onChange={handleChange}
                    placeholder="Full name"
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="mb-3">
                  <label className="form-label">
                    Mobile Number <span className="text-danger">*</span>
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={formValues.mobile}
                    onChange={(phone, countryData, e) => {
                      if (e?.type === "change") {
                        setPhoneTouched(true);
                      }
                      handleChange({
                        target: { name: "mobile", value: phone },
                      });
                    }}
                    inputClass={`form-control mobile-input ${
                      errors.mobile && phoneTouched ? "is-invalid" : ""
                    }`}
                    inputProps={{
                      name: "mobile",
                      required: true,
                      onBlur: () => setPhoneTouched(true),
                    }}
                    countryCodeEditable={false}
                    disableDropdown={false}
                    disableCountryCode={false}
                  />
                  {errors.mobile && phoneTouched && (
                    <div className="invalid-feedback d-block">
                      {errors.mobile}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="common-btn contact-btn w-100 fw-bold fs-5 px-4 py-2 rounded"
                >
                  Send Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
