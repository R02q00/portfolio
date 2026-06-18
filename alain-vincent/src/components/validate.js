const Validate = (values, t) => {
    const errors = {};
    
    if (!values.name.trim()) {
        errors.name = t("validation.requiredName");
    } else {
        errors.name = null;
    }
    
    if (!values.email) {
        errors.email = t("validation.requiredEmail");
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = t("validation.invalidEmail");
    } else {
        errors.email = null;
    }
    
    if (!values.message.trim()) {
        errors.message = t("validation.requiredMessage");
    } else {
        errors.message = null;
    }
    
    return errors;
};

export default Validate;