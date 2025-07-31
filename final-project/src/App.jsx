import React, { useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import ProjectSlider from './components/ProjectSlider.jsx';
import Domains from './components/Domains.jsx';
import ContactForm from './components/ContactForm.jsx';


function App() {
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    const scroll = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Navbar 
                onAbout = {() => scroll(aboutRef)}
                onProjects = {() => scroll(projectRef)}
                onContact = {() => scroll(contactRef)} 
            />

            <div ref={aboutRef}>
                <AboutUs />
            </div>

            <div ref={projectRef}>
                <ProjectSlider />
            </div>

            <Domains />

            <div ref={contactRef}>
                <ContactForm />
            </div>

        </>
    );
}

export default App;

