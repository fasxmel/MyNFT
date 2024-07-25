function Register() {
    return (
      <div className="relative flex flex-grow bg-gradient-to-r from-indigo-200 to-yellow-100 px-8 items-center justify-between py-4">
       <form>
      <label>Email</label>
      <input type="email" placeholder="email"/>
      <label>Password</label>
      <input type="password" placeholder="password" />
      <label>rePassword</label>
      <input type="password" placeholder="rePassword" />
     </form>
      </div>
    )
  }
  
  export default Register;