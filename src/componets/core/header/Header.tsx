import React from 'react';
import './Header.css';
import {Translator} from "../../i18n";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
    return (
        <div className="header-conteiner">
            <h1>Eduardo Vaz</h1>
            <h2><Translator path={'resume.position'} /></h2>
            <hr />
            <div>
                <p><Translator path={'resume.intro.phrase1'} /></p>
                <p>
                    <Translator path={'resume.intro.phrase2'} />
                    <a href="https://www.resume.eduardovaz.dev/home" target="_blank" rel="noopener noreferrer">
                        <Translator path={'resume.intro.phrase3'} />
                        <FontAwesomeIcon icon={faExternalLink} />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Header;
