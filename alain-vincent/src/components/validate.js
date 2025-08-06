const Validate = (values) => {
    const errors = {};
    
    if (!values.name.trim()) {
        errors.name = "Veuillez saisir votre nom!";
    } else {
        errors.name = "";
    }
    
    if (!values.email) {
        errors.email = "Veuillez saisir votre email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email invalide";
    } else {
        errors.email = "";
    }
    
    if (!values.message.trim()) {
        errors.message = "Votre message ici";
    } else {
        errors.message = "";
    }
    
    return errors;
};

export default Validate;