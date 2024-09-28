import React from "react";
import "./Work.css";
import {useTranslation} from "react-i18next";
import {Translator} from "../../i18n";
interface WorkEntry {
    title: string;
    institution: string;
    period: string;
    description: string;
    location: string;
}

interface WorkData {
    entrys: WorkEntry[];
}

const Work: React.FC = () => {
    const { t } = useTranslation();
    const workData = t('career', { returnObjects: true }) as WorkData;
    return (
        <div className="work-container">
            <h1><Translator path="career.title"/></h1>
            <div>
                <div className="work-content">
                    {workData.entrys.map((skill, index) => (
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

export default Work;
