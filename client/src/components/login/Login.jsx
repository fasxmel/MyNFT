import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useForm } from "../../hooks/useFormF";


const loginFormKeys = {
  Email: "email",
  Password: "password",
}

function Login() {
  
   const { onLoginSubmit } = useContext(UserContext);
   const { values, changeHandler, onSubmit } = useForm({
      [loginFormKeys.Email]: '',
      [loginFormKeys.Password]: '',
   } , onLoginSubmit );

  return (
    <div className ="relative flex flex-grow bg-gradient-to-r from-indigo-200 to-yellow-100 px-8 items-center justify-between py-4">
   
     <form method="POST" id="login"  onSubmit={onSubmit} className="flex flex-col items-center justify-center">

      <label htmlFor="email">Email:</label>
      <input 
      id="email" 
      type="email" 
      name={loginFormKeys.Email} 
      placeholder="email"
      value={values[loginFormKeys.Email]} 
      onChange={changeHandler}
      />

      <label htmlFor="password">Password:</label>
      <input 
      id="password" 
      type="password" 
      name={loginFormKeys.Password} 
      placeholder="password" 
      value={values[loginFormKeys.Password]}
      onChange={changeHandler}
      />

      <input type="submit" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100" value="Login" />
     </form>
   
    </div>
  )
}

export default Login;