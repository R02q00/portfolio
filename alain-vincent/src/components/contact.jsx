import { useState } from "react";
import Validate from "./validate";
import InputField from "./InputField.jsx";
import TextAreaField from "./textAreaField.jsx";

const Contact = () => {
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" });
    const [showStatus, setShowStatus] = useState(false);
    const [messageContent, setMessageContent] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setMessageContent(prev => ({ ...prev, [id]: value }));
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const validationErrors = Validate(messageContent);
        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => error === "")) {
            setIsSubmitting(true);

            try {
                const formData = new FormData();
                formData.append("name", messageContent.name);
                formData.append("email", messageContent.email);
                formData.append("message", messageContent.message);
                const response = await fetch("https://formspree.io/f/xrblokgr", {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();

                if (response.ok) {
                    setSubmitStatus({ success: true, message: "Message envoyé avec succès !" });
                    setMessageContent({ name: "", email: "", message: "" });
                    setShowStatus(true);
                    setTimeout(() => {
                        setShowStatus(false);
                    }, 5000);
                } else {
                    const errorMsg = data.error || "Erreur lors de l'envoi";
                    throw new Error(errorMsg);
                }
            } catch (error) {
                console.log(error);
                setSubmitStatus({
                    success: false,
                    message: error.message || "Une erreur est survenue. Réessayez plus tard."
                });
                setShowStatus(true);
                setTimeout(() => {
                    setShowStatus(false);
                }, 5000);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const Button = ({ children, variant = 'indigo' }) => {
        const variants = {
            indigo: 'border-indigo-600 text-indigo-600 hover:border-indigo-200',
            yellow: 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white'
        };

        return (
            <button
                className={`border px-4 py-2 font-bold rounded-md transition-colors duration-300 ${variants[variant]}`}
                type="submit"
                disabled={isSubmitting}
            >
                {children}
            </button>
        )
    };

    return (
        <>
            <h1 className="text-2xl md:text-3xl text-center font-bold">Contact</h1>
            <p className="text-lg mb-4">Laisser-moi un message ou connectons-nous sur d'autre plateforme.</p>
            <div className="grid w-full md:w-[800px] md:grid-cols-2 gap-3 mt-2">
                <div className="space-y-5">
                    <div className="grid">
                        <a href="" className="text-lg text-indigo-700 font-bold">Adresse</a>
                        <span className="text-right md:text-left font-medium">Lot 447B/3306 Fosarato Idanda</span>
                        <span className="text-right md:text-left">Fianarantsoa, Madagascar</span>
                    </div>

                    <div className="grid">
                        <a href="" className="text-md text-indigo-700 font-bold">Email</a>
                        <span className="text-right md:text-left font-medium">alain.vincent069@gmail.com</span>
                    </div>

                    <div className="grid">
                        <a href="" className="text-lg text-indigo-700 font-bold">Social</a>
                        <span className="text-right md:text-left">+261 38 08 096 99(WhatsApp)</span>

                    </div>
                </div>

                <form onSubmit={handleSendMessage} className="mt-2 sm:mt-8 md:mt-0">
                    {submitStatus.message && (
                        <p className={`my-3 text-center ${submitStatus.success ? "text-green-600" : "text-red-500"}`}>
                            {submitStatus.message}
                        </p>
                    )}
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
                        <Button variant="indigo" >
                            Envoyer
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;