import { useEffect, useState } from "react";


export const useForm = (initialValues, submitCallback) => {
    const [values, setValues] = useState(initialValues);


    useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);
    
    const changeHandler = (e) => {
                // we take the old state into new state and updeiting da values is set to the current value
        setValues(state => ({...state, [e.target.name]: e.target.value}));

    }

    const submitHandler = async (e) => {
        e.preventDefault();

        

    await submitCallback(values);
    setValues(initialValues);
    };

    return{
        values,
        changeHandler,
        submitHandler,
    }
}