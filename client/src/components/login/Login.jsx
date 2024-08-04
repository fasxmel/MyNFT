import { useForm } from "../../hooks/useFormF";
import { useLogin } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
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
    <div className ="relative flex flex-grow bg-gradient-to-r from-indigo-200 to-yellow-100 px-8 items-center justify-between py-4">
   
     <form id="login" onSubmit={submitHandler} className="flex flex-col items-center justify-center">

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

      {error && <p className="text-red-500">{error} </p>}

      <input type="submit" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100" value="Login" />
     </form>
   
    </div>
  )
}

export default Login;