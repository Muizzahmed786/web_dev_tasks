import projects from './projects.js';
import {useState} from 'react';
function ProjectSlider(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return( <>
                <div className='slider-container'>
                    <h2>Our Projects</h2>
                    <div className='slides-wrapper'
                         style = {{transform: `translateX(-${currentIndex * 100}%)`}}>
                    
                        {projects.map((project, index) => (
                            <div className='slide' key={index}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <a href={project.link} target='_blank'>(view project)</a>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevSlide}>⬅️</button>
                    <button onClick={nextSlide}>➡️</button>
                </div>
                <hr />
            </>)

}

export default ProjectSlider;