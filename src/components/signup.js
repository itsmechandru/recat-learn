import React, { useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

function Signup() {
    const [validationSchema, setvalidationSchema] = useState({ firstname: "", lastname: "", email: "", mobilenumber: "", dob: "", department: "", designation: "" })
    const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    return (
        < Formik
            initialValues={{ firstname: "", lastname: "", email: "", mobilenumber: "", dob: "", department: "", designation: "" }}
            validationSchema={Yup.object().shape({
                firstname: Yup.string()
                    .required("Required"),
                lastname: Yup.string()
                    .required("Required"),
                email: Yup.string()
                    .email()
                    .required("Required"),
                mobilenumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
                    .required("Required")
                    .max(10),
                dob: Yup.date()
                    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
                    .required("Required"),
                department: Yup.string()
                    .required("Required"),
                designation: Yup.string()
                    .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log("Logging in", values);
                    setSubmitting(false);
                }, 500);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;

                console.log("Errors:" , errors);

                return (
                    <form onSubmit={handleSubmit}>

                        <div class="mb-3">
                            <label htmlFor="firstname" class="form-label">Firstname</label>
                            <input
                                id="firstname"
                                name="firstname"
                                type="text"
                                placeholder="Enter your firstname"
                                value={values.firstname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control ${errors.firstname && touched.firstname && "error"}`}
                            />
                            {errors.firstname && touched.firstname && (
                                <div className="input-feedback">{errors.firstname}</div>
                            )}
                        </div>

                        <div class="mb-3">
                            <label htmlFor="lastname" class="form-label">Last name</label>
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                placeholder="Enter your lastname"
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control ${errors.lastname && touched.lastname && "error"}`}
                            />
                            {errors.lastname && touched.lastname && (
                                <div className="input-feedback">{errors.lastname}</div>
                            )}
                        </div>

                        <div class="mb-3">
                            <label htmlFor="email" class="form-label">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control ${errors.email && touched.email && "error"}`}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                        </div>
                        <div class="mb-3">
                            <label htmlFor="mobilenumber" class="form-label">Mobile Number</label>
                            <input
                                id="mobilenumber"
                                name="mobilenumber"
                                type="text"
                                placeholder="Enter your mobilenumber"
                                maxLength={10}
                                value={values.mobilenumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control ${errors.mobilenumber && touched.mobilenumber && "error"}`}
                            />
                            {errors.mobilenumber && touched.mobilenumber && (
                                <div className="input-feedback">{errors.mobilenumber}</div>
                            )}
                        </div>

                        <div class="mb-3">
                            <label htmlFor="dob" class="form-label">DOB</label>
                            <input
                                id="dob"
                                name="dob"
                                type="date"
                                placeholder="Enter your dob"
                                value={values.dob}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control ${errors.dob && touched.dob && "error"}`}
                            />
                            {errors.dob && touched.dob && (
                                <div className="input-feedback">{errors.dob}</div>
                            )}
                        </div>
                        <div class="mb-3">
                            <label htmlFor="department" class="form-label">Department</label>
                            <select
                                id="department"
                                name="department"
                                value={values.department}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control ${errors.department && touched.department && "error"}`}
                            >
                                <option value="" label="Select">
                                    Select
                                </option>
                                <option value="a" label="a">
                                    A
                                </option>
                                <option value="b" label="b">
                                    B
                                </option>
                                <option value="c" label="c">
                                    C
                                </option>
                            </select>
                            
                            {errors.department && touched.department && (
                                    <div className="input-feedback">{errors.department}</div>
                                )}
                        </div>
                        <div class="mb-3">
                            <label htmlFor="designation" class="form-label">Designation</label>
                            <input
                                id="designation"
                                name="designation"
                                type="text"
                                placeholder="Enter your designation"
                                value={values.designation}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`form-control ${errors.designation && touched.designation && "error"}`}
                            />
                            {errors.designation && touched.designation && (
                                <div className="input-feedback">{errors.designation}</div>
                            )}
                        </div>
                        <button type="submit" disabled={isSubmitting} className="d-flex justify-content-start">
                            Login
                        </button>

                    </form>
                );
            }}
        </Formik >
    )


}

export default Signup;