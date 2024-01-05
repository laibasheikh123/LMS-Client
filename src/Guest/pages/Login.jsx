
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from 'axios';
import { GlobalContext } from "../../Context/context";
import 'ldrs/ring'


export default function Login() {
  const { state, dispatch } = useContext(GlobalContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    setLoading(true)

    axios.post('https://freechamp.cyclic.app/api/login', values)

      .then(res => {
        dispatch(
          {
            type: 'USER_LOGIN',
            token: res.data.token
          }
        )
        setLoading(false)
        alert(res.data.message)
        navigate('/')
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })

    // console.log(values)
  };
  
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password length must be greater than 8';
    }
    return errors;
  };

  const formik = useFormik({ initialValues, onSubmit, validate });




  return (
    <>
      {loading && (
        <div className="bg-slate-900/10 h-screen w-screen absolute flex justify-center items-center backdrop-blur-md">
          <l-ring size="60" color="blue"></l-ring>
        </div>
      )}

      <div>

        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-black-500 mb-4">Login</h2>
            <form
              className="flex flex-col"
              onSubmit={formik.handleSubmit}
            >
              <input
                placeholder="Email address"
                type="email"
                className={`bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 ${formik.touched.email && formik.errors.email ? 'error' : ''}`}
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-3 text-red-600">{formik.errors.email}</p>
              )}

              <input
                name="password"
                type="password"
                className={`bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 ${formik.touched.password && formik.errors.password ? 'error' : ''}`}
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="error-message">{formik.errors.password}</div>
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
                <p className="text-black-500 mt-4">
                  {" "}
                  Dont have an account?{" "}
                  <Link className="text-black-500" to={'/signup'}>Signup</Link>
                </p>
                <button
                  type="submit"
                  className="bg-black text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-black-600 transition ease-in-out duration-150"
                >
                  Login
                </button>


              </div>

            </form>
          </div>
        </div>

      </div>
    </>
  )
}
