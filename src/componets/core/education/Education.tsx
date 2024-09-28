import React from "react";
import "./Education.css";
import { useTranslation } from 'react-i18next';
import {Translator} from "../../i18n";

interface EducationEntry {
    title: string;
    institution: string;
    period: string;
    description: string;
    location: string;
}

interface EducationData {
    entrys: EducationEntry[];
}


const Education: React.FC = () => {
    const { t } = useTranslation();
    const educationData = t('education', { returnObjects: true }) as EducationData;
    return (
        <div className="education-container">
            <h1><Translator path="education.title"/></h1>
            <div>
                <div className="education-content">
                    {educationData.entrys.map((skill, index) => (
                        <>
                        <h2 key={index}>
                            {skill.title}
                        </h2>
                        <h3 key={index}>
                            {skill.institution} - {skill.period}
                        </h3>
                        <p key={index}>
                            {skill.description}
                        </p>
                            <h4 key={index}>
                                {skill.location}
                            </h4>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
