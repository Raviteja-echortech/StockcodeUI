import { View } from "react-native"
import React, { useState } from "react"
const useForms = (initialValues, validate, onSubmit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (name, value) => {
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleBlur = () => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
      };
    
      const handleSubmit = () => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setIsSubmitting(true);
    
        if (Object.keys(validationErrors).length === 0) {
          onSubmit();
        } else {
          setIsSubmitting(false);
        }
      };
    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,

    }
}
export default useForms