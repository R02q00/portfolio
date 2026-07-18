import { useState } from "react";
import Validate from "./validate";
import InputField from "./InputField.jsx";
import TextAreaField from "./textAreaField.jsx";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

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
    const { t } = useTranslation();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setMessageContent(prev => ({ ...prev, [id]: value }));
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const validationErrors = Validate(messageContent, t);
        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => error === null)) {
            setIsSubmitting(true);
            try {
                const formData = new FormData();
                formData.append("name", messageContent.name);
                formData.append("email", messageContent.email);
                formData.append("message", messageContent.message);

                const response = await fetch(`${endpoint}`, {
                    method: "POST",
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                const data = await response.json();

                if (response.ok) {
                    setSubmitStatus({ success: true, message: t("contact.status.success") });
                    setMessageContent({ name: "", email: "", message: "" });
                    setShowStatus(true);
                    setTimeout(() => { setShowStatus(false); }, 5000);
                } else {
                    const errorMsg = t("contact.status.sendError");
                    throw new Error(errorMsg);
                }
            } catch (error) {
                console.log(error);
                setSubmitStatus({ success: false, message: error.message || t("contact.status.error") });
                setShowStatus(true);
                setTimeout(() => { setShowStatus(false); }, 5000);
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
                className={`border px-4 py-2 w-full md:w-[50%] font-bold rounded-md transition-colors duration-300 ${variants[variant]}`}
                type="submit"
                disabled={isSubmitting}
            >
                {children}
            </button>
        )
    };

    return (
        <>
            <h1 className="text-2xl md:text-3xl text-center font-bold mb-4">
                {t("contact.title")}
            </h1>
            <p className="text-lg mb-4">
                {t("contact.subtitle")}
            </p>
            <div className="grid w-full md:w-[800px] md:grid-cols-2 gap-3 mt-2">
                <div className="space-y-5">
                    <div className="grid">
                        <a href="" className="text-lg text-indigo-700 font-bold">{t("contact.address")}</a>
                        <span className="text-right md:text-left font-medium">Lot 447B/3306 Fosarato Idanda</span>
                        <span className="text-right md:text-left">Fianarantsoa, Madagascar</span>
                    </div>

                    <div className="grid">
                        <a href="" className="text-md text-indigo-700 font-bold">{t("contact.email")}</a>
                        <span className="text-right md:text-left font-medium">alainvincent.razafimandimby@gmail.com</span>
                    </div>

                    <div className="grid">
                        <span className="text-lg text-indigo-700 font-bold">{t("contact.social")}</span>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://github.com/R02q00"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-indigo-700 transition duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/alain-razafimandimby"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-700 transition duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="https://wa.me/261380809699"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-700 transition duration-300"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={20} />
                            </a>
                            <a href="mailto:alainvincent.razafimandimby@gmail.com"
                                className="hover:text-indigo-700 transition duration-300"
                                aria-label="Email"
                            >
                                <IoMailOutline size={20} />
                            </a>
                        </div>

                    </div>
                </div>

                <form onSubmit={handleSendMessage} className="mt-2 sm:mt-10 md:mt-0">
                    {submitStatus.message && (
                        <p className={`my-3 text-center ${submitStatus.success ? "text-green-600" : "text-red-500"}`}>
                            {submitStatus.message}
                        </p>
                    )}
                    <div className="flex flex-col gap-6">
                        <InputField
                            id="name"
                            label={t("contact.form.name")}
                            type="text"
                            value={messageContent.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <InputField
                            id="email"
                            label={t("contact.form.email")}
                            type="email"
                            value={messageContent.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextAreaField
                            id="message"
                            label={t("contact.form.message")}
                            value={messageContent.message}
                            onChange={handleChange}
                            error={errors.message}
                        />
                    </div>
                    <div className="mt-4 flex">
                        <Button variant="indigo" >
                            {t("contact.form.send")}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;