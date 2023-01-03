import React, { useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

function Login() {
    const [validationSchema, setvalidationSchema] = useState({ email: "",password:""})

    return (
        < Formik
        initialValues = {{ email: "", password: "" }}
        validationSchema = {Yup.object().shape({ email: Yup.string()
            .email()
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.") }) }
        onSubmit = {(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
            }, 500);
        }}
          >
            { props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
        
            return (
                <form onSubmit={handleSubmit}>
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
                        className={`form-control ${errors.password && touched.password && "error"}`}
                    />
                    {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                    )}
        </div>
        <div class="mb-3">
                    <label htmlFor="password" class="form-label">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.password && touched.password && "error"}`}
                    />
                    {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
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

export default Login;