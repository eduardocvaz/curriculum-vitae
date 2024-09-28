import React from "react";
import "./Skills.css";
import {Translator} from "../../i18n";

const Skills: React.FC = () => {
    const skillsList = [
        "React",
        "Angular",
        "Vue.js",
        "Node.js",
        "Spring Framework",
        "Flutter",
        "Kotlin",
        "JAVA",
        "Typescript",
        "Dart",
        "Javascript",
        "HTML",
        "SCSS",
        "HTTP",
        "REST",
        "GraphQL",
        "SQL",
        "NoSQL",
        "Regex",
        "Unix Shell",
        "PostgreSQL",
        "SQLite",
        "Docker",
        "Kubernetes",
        "GitLab",
        "GitHub",
        "AWS",
        "CI/CD",
        "Agile Workflow",
        "Scrum Framework",
    ];

    return (
        <div className="skills-container">
            <h1 className="title"><Translator path="skills.title"/></h1>
            <div>
                <ul className="skills-content">
                    {skillsList.map((skill, index) => (
                        <li key={index}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
