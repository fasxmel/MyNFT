import { useState } from "react";
import { useForm } from "../../hooks/useFormF";
import { useRegister } from "../../hooks/useUser";
import { useNavigate, Link } from "react-router-dom";

const initialValues = {
    email: '',
    password: '',
    rePassword: '',
  }

function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();
    const registerhandler = async ({email, password, rePassword}) => {

     if (password !== rePassword) {
       return setError('Passwords do not match');
     }

     try {
       await register(email, password)
       navigate('/');
     } catch (error) {
       setError(error.message);
     }
 
    };
   
    const { 
     values, 
     changeHandler, 
     submitHandler
   } = useForm(initialValues, registerhandler);
 
  return (

    <>

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-indigo-200 to-yellow-100">

         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/logo1.jpg"
            className="mx-auto h-10 w-auto rounded-md"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your account
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

            <div>
            
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
                </label>
                
              <div className="mt-2">
                <input
                  id="rePassword"
                  name="rePassword"
                  type="password"
                  value={values.rePassword} 
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
                Register
              </button>
            </div>

          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            You already member?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </Link>
          </p>
         </div>

      </div>







    {/* <div className ="relative flex flex-grow bg-gradient-to-r from-indigo-200 to-yellow-100 px-8 items-center justify-between py-4">
   
     <form id="register" onSubmit={submitHandler} className="flex flex-col items-center justify-center">

      <label htmlFor="email">Email:</label>
     <input 
     id="email" 
     type="email" 
     name="email"
     placeholder="email"
     value={values.email}
     onChange={changeHandler}
     />

     <label htmlFor="password">Password:</label>
     <input 
     id="password" 
     type="password" 
     name="password"
     placeholder="password" 
     value={values.password}
     onChange={changeHandler}
    
     />

     <label htmlFor="password">Confirm Password:</label>
     <input 
     id="rePassword" 
     type="password" 
     name="rePassword"
     placeholder="confirm password" 
     value={values.rePassword}
     onChange={changeHandler}
    
     />
     {error && (
       <p className="text-red-500">{error}</p>
     )}

     <input value="Register" type="submit" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100" />

      </form> 
  
     </div>  */}


    </>
  )

}

export default Register;   
