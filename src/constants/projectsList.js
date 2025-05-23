import projectQuiz from '../assets/quiz.jpg';
import projectLemon from '../assets/little-lemon.jpg';
import projectPassword from '../assets/password.jpg';

export const projectsList = [
    {
        title: "Restaurant Website",
        img: projectLemon,
        visitLink: "https://anastasi11a.github.io/simplewebsite/",
        gitHubLink: "https://github.com/Anastasi11a/layoutsite",
        skills: 'HTML, CSS',
        description: 'A website designed for a restaurant offers users a simple layout to navigate',
        features: 'Animated promotions, Menu with descriptions, Online table booking, Footer contact info'
    },
    {
        title: "Quiz Creator",
        img: projectQuiz,
        visitLink: "https://anastasi11a.github.io/quizcreator/",
        gitHubLink: "https://github.com/Anastasi11a/quizcreator",
        skills: 'JavaScript, React, Bootstrap v5',
        description: 'The application allows users to create tests, upload tests and take them',
        features: 'Create quizzes with questions, Download quizzes as JSON, Dynamic feedback',
    },
    {
        title: "Password Generator",
        img: projectPassword,
        visitLink: "https://anastasi11a.github.io/passwordgenerator/",
        gitHubLink: "https://github.com/Anastasi11a/passwordgenerator",
        skills: 'TypeScript, React, Chakra UI',
        description: 'A password generator app that allows users to customize password length and complexity',
        features: 'Adjustable length, Complexity options, Real-time generation',
    },
];