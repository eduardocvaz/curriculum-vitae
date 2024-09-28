import React from "react";
import "./Footer.css";
import {Translator} from "../../i18n";


const Footer: React.FC = () => {
    return (
        <div className="footer-conteiner">
            <h2>
                <Translator path="footer.title"/><a href="https://www.cv.eduardovaz.dev/" target="_blank" rel="noopener noreferrer"><Translator path="footer.link"/></a>.
            </h2>
        </div>
    );
};

export default Footer;
