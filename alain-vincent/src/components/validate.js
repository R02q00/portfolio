const Validate = (values) => {
    const errors = {};
    
    if (!values.name.trim()) {
        errors.name = "Name is required";
    } else {
        errors.name = "";
    }
    
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    } else {
        errors.email = "";
    }
    
    if (!values.message.trim()) {
        errors.message = "Message is required";
    } else {
        errors.message = "";
    }
    
    return errors;
};

export default Validate;