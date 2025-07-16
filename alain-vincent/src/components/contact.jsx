import { useState } from "react";
import Validate from "./validate";
import InputField from "./InputField.jsx";

const Contact = () => {
    const [errors, setErrors] = useState({});
    const [messageContent, setMessageContent] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setMessageContent(prev => ({ ...prev, [id]: value }));
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        const validationErrors = Validate(messageContent);
        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => error === "")) {
            console.log("Message content :", messageContent);
        }
    };

    const Button = ({ children, action, variant = 'indigo' }) => {
        const variants = {
            indigo: 'border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white ',
            yellow: 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white'
        };

        return (
            <button
                className={`border px-4 py-2 rounded-md transition-colors duration-300 ${variants[variant]}`}
                type="submit"
                onClick={action}
            >
                {children}
            </button>
        )
    };

    return (
        <form onSubmit={handleSendMessage} className="">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="flex flex-col gap-6">
                <InputField
                    id="name"
                    label="Name"
                    type="text"
                    value={messageContent.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <InputField
                    id="email"
                    label="Email"
                    type="email"
                    value={messageContent.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <InputField
                    id="message"
                    label="Message"
                    type="text"
                    value={messageContent.message}
                    onChange={handleChange}
                    error={errors.message}
                />
            </div>
            <div className="mt-4">
                <Button variant="indigo" action={handleSendMessage}>
                    Send Message
                </Button>
            </div>
        </form>
    );
};

export default Contact;