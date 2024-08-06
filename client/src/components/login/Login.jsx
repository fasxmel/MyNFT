import { useForm } from "../../hooks/useFormF";
import { useLogin } from "../../hooks/useUser";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";



const initialValues = {
  email: '',
  password: '',
}


function Login() {
  const [error, setError] = useState('');
   const login = useLogin();
   const navigate = useNavigate();
   const loginHandler = async ({email, password}) => {

    if (!email || !password) {
      return setError('All fields are required!');
    }
    

    try {
      await login(email, password)
      navigate('/');
    } catch (error) {
      setError(error.message);
    }

   };
  
   const { 
    values, 
    changeHandler, 
    submitHandler
  } = useForm(initialValues, loginHandler);

  return (
  
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-indigo-200 to-yellow-100">

         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/logo1.jpg"
            className="mx-auto h-10 w-auto rounded-md"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
         </div>

         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form onSubmit={submitHandler} className="space-y-6">

            <div>

              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email} 
                  onChange={changeHandler}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            </div>

            <div>
            
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={values.password} 
                  onChange={changeHandler}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            </div>

            {error && <p className="text-red-500">{error} </p>}

            <div>

              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>

          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </Link>
          </p>
         </div>

      </div>

  )
}

export default Login;