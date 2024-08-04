import { useState } from "react";


export const useForm = (initialValues, submitCallback) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
                // we take the old state into new state and updeiting da values is set to the current value
        setValues(state => ({...state, [e.target.name]: e.target.value}));

    }

    const submitHandler = (e) => {
        e.preventDefault();

        

    submitCallback(values);
    setValues(initialValues);
    };

    return{
        values,
        changeHandler,
        submitHandler,
    }
}