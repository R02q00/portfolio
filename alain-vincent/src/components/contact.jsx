import { useState } from "react";
import Validate from "./validate";
import InputField from "./InputField.jsx";
import TextAreaField from "./textAreaField.jsx";
import { FaGithub } from "react-icons/fa";

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
            indigo: 'border-indigo-600 text-indigo-600 hover:border-indigo-200',
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
        <>
            <h1 className="text-2xl md:text-3xl text-center mb-6 font-bold">Contact</h1>
            <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-5 ">
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

                <form
                    onSubmit={handleSendMessage} className="mt-2 sm:mt-8 md:mt-0"
                    action="https://formspree.io/f/alain.vincent069@gmail.com"
                    method="POST"
                    data-netlify="true"
                >
                    <div className="flex flex-col gap-6">
                        <InputField
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            value={messageContent.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <InputField
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            value={messageContent.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextAreaField
                            id="message"
                            name="message"
                            label="Message"
                            value={messageContent.message}
                            onChange={handleChange}
                            error={errors.message}
                        />
                    </div>
                    <div className="mt-4">
                        <Button variant="indigo" action={handleSendMessage}>
                            Envoyer
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;