import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import 'ldrs/ring'

export default function Signup() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const initialValues = {
        username: '',
        email: '',
        password: '',
        gender: '',
    };

    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
       
        axios.post('https://freechamp.cyclic.app/api/signup', values)
            // .then(res => console.log(res))
            // .catch(err => console.log(err))
            .then(res => {
                setLoading(true)
                alert(res.data.message)
                navigate('/login')
            })
            .catch(err => {
                setLoading(false)
                alert(err.response.data.message)
            })
    };
    const validate = (values) => {
        const errors = {};


        if (!values.username) {
            errors.username = 'Required';
        }



        if (!values.email) {
            errors.email = 'Required';
        }

        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8) {
            errors.password = 'password length must be greater than 8';
        }

        return errors;
    };

    const formik = useFormik({ initialValues, onSubmit, validate });

    return (

        <>
            {loading && <h1>Loading....</h1>}

            <div>
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-black-500 mb-4">Signup</h2>
                        <form
                            className="flex flex-col"
                            onSubmit={formik.handleSubmit}
                        >
                            <input
                                placeholder="Username"
                                type="username"
                                className={`bg-gray-100 text-black-500 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black-500 transition ease-in-out duration-150 ${formik.touched.email && formik.errors.email ? 'error' : ''}`}

                                name="username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            {formik.touched.username && formik.errors.username && (
                                <div className="error-message">{formik.errors.username}</div>
                            )}
                            <input
                                placeholder="Email address"
                                type="email"
                                className={`bg-gray-100 text-black-500 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black-500 transition ease-in-out duration-150 ${formik.touched.password && formik.errors.password ? 'error' : ''}`}
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="error-message">{formik.errors.email}</div>
                            )}
                            <input
                                name="password"
                                type="password"
                                className={`bg-gray-100 text-black-500 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black-500 transition ease-in-out duration-150 ${formik.touched.password && formik.errors.password ? 'error' : ''}`}

                                placeholder="Password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div className="error-message">{formik.errors.password}</div>
                            )}
                            <input
                                name="gender"
                                type="gender"
                                className={`bg-gray-100 text-black-500 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black-500 transition ease-in-out duration-150 ${formik.touched.gender && formik.errors.gender ? 'error' : ''}`}

                                placeholder="Gender"
                                onChange={formik.handleChange}
                                value={formik.values.gender}
                            />
                            {formik.touched.gender && formik.errors.gender && (
                                <div className="error-message">{formik.errors.gender}</div>
                            )}



                            <div className="flex items-center justify-between flex-wrap">
                                <label
                                    htmlFor="remember-me"
                                    className="text-sm text-gray-900 cursor-pointer"
                                >
                                    <input type="checkbox" id="remember-me" className="mr-2" />
                                    Remember me
                                </label>
                                <a href="#" className="text-sm text-black-500 hover:underline mb-0.5">
                                    Forgot password?
                                </a>
                                <p className="text-gray-900 mt-4">
                                    Already Have an Account?
                                    <Link className="text-black-500" to={'/login'}>Login</Link>
                                </p>
                            </div>
                            
                            <button
                                type="submit"
                                className="bg-black text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-black-600 transition ease-in-out duration-150"
                            >
                                Signup
                            </button>

                            

                        </form>
                    </div>
                </div>

            </div>
        </>


    )
}
