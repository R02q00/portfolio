import { useState } from "react";
import Validate from "./validate";
import InputField from "./InputField.jsx";
import TextAreaField from "./textAreaField.jsx";

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
                className={`border px-4 py-2 font-bold rounded-md transition-colors duration-300 ${variants[variant]}`}
                type="submit"
                onClick={action}
            >
                {children}
            </button>
        )
    };

    return (
        <div className="grid md:grid-cols-2 gap-2">
            <div className="space-y-5">
                <h1 className="text-2xl text-center font-bold">Contact</h1>
                <section className="grid">
                    <a href="" className="text-lg text-indigo-700 font-bold">Adresse</a>
                    <span className="text-right md:text-left font-medium">Lot 447B/3306 Fosarato Idanda</span>
                    <span className="text-right md:text-left">Fianarantsoa, Madagascar</span>
                </section>

                <section className="grid">
                    <a href="" className="text-md text-indigo-700 font-bold">Email</a>
                    <span className="text-right md:text-left font-medium">alain.vincent069@gmail.com</span>
                </section>

                <section className="grid">
                    <a href="" className="text-lg text-indigo-700 font-bold">Social</a>
                    <span className="text-right md:text-left">+261 34 64 450 06 (WhatsApp)</span>
                </section>
            </div>
            <form onSubmit={handleSendMessage}>
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
                    <TextAreaField
                        id="message"
                        label="Message"
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
        </div>

    );
};

export default Contact;