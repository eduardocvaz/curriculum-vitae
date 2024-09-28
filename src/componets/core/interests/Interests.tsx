import React from "react";
import "./Interests.css";
import {Translator} from "../../i18n";

const Interests: React.FC = () => {
    const interestsList = [
        "Full Stack Development",
        "Api Design",
        "AI",
        "Microservices",
        "Infrastructure",
        "Cloud Computing",
        "Continuous Integration",
        "Continuous Delivery",
    ];
    return (
        <div className="interests-container">
            <h1 className="title"><Translator path="interests.title"/></h1>
            <div>
                <ul className="interests-content">
                    {interestsList.map((skill, index) => (
                        <li key={index}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Interests;
