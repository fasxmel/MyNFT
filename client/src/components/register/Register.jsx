import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/userContext";
import { useForm } from "../../hooks/useFormF";

 function Register (){
    const { onRegisterSubmit } = useContext(UserContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <section id="register" className="bg-gray-100 flex flex-grow items-center justify-center">
            <form id="register" method="post" onSubmit={onSubmit}>
                <div className="flex flex-col items-center justify-center gap-4">
                   
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        value={values.confirmPassword}
                        onChange={changeHandler}
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    );
};

export default Register;