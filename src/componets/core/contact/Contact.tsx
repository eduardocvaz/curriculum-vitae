import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import {Translator} from "../../i18n";

const Contact: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-container">
            <h1>{t('contact.title')}</h1>
            <ul>
                <li>
                    <strong>
                        <Translator path="contact.email.label" />:
                    </strong>
                    <span><a href="mailto:eduardo@eduardovaz.dev"><Translator path="contact.email.content" /></a></span>
                </li>
                <li>
                    <strong>
                        <Translator path="contact.phone.label" />:
                    </strong>
                    <span><Translator path="contact.phone.content"/></span>
                </li>
                <li>
                    <strong>
                        <Translator path="contact.linkedin.label"/>:
                    </strong>
                    <span><a href="https://www.linkedin.com/in/eduardo-c-vaz/" target="_blank" rel="noopener noreferrer"><Translator path="contact.linkedin.content" /></a></span>
                </li>
                <li>
                    <strong>
                        <Translator path="contact.github.label"/>:
                    </strong>
                    <span><a href="https://github.com/eduardocvaz" target="_blank" rel="noopener noreferrer"><Translator path="contact.github.content"/></a></span>
                </li>
                <li>
                    <strong>
                        <Translator path="contact.portfolio.label"/>:
                    </strong>
                    <span><a href="https://www.resume.eduardovaz.dev/portfolio" target="_blank" rel="noopener noreferrer"><Translator path="contact.portfolio.content"/></a></span>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
