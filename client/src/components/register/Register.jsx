import { useState } from "react";
import { useForm } from "../../hooks/useFormF";
import { useRegister } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

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
    <div className ="relative flex flex-grow bg-gradient-to-r from-indigo-200 to-yellow-100 px-8 items-center justify-between py-4">
   
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
  
   </div>
  )

}

export default Register;   
