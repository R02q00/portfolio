import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer footer-horizontal footer-center text-base-content py-4">
            <aside>
                <p>
                    {t("footer.copyright", {
                        year: new Date().getFullYear(),
                        name: "R02q00"
                    })}
                </p>
            </aside>
        </footer>
    );
}