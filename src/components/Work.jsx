import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';

const ProjectDisplay = () => {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        setProjects(projectsData);
        const uniqueCategories = ['All', ...new Set(projectsData.map(project => project.category))];
        setCategories(uniqueCategories);
    }, []);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div
            className="h-screen bg-slate-900 flex flex-col justify-center place-items-center gap-4 pl-10 pt-16 pb-2  font-main">
            <div className='relative  w-40'>
                <h3 className='text-white text-2xl uppercase after:block after:absolute after:w-20 after:h-4 after:border-t-2 after:border-yellow-400 after:right-0 after:top-1/2'>Work </h3>
            </div>
            <ul className=" hidden md:flex list-none uppercase gap-4 sm:gap-10 no-underline pl-6 mb-8">
                {categories.map(category => (
                    <li
                        key={category}
                        className={`hover:text-yellow-400 hover:cursor-pointer ${selectedCategory === category ? 'text-yellow-400 ' : ' text-white'}`}
                    >
                        <button
                            key={category}
                            value={category}
                            onClick={handleCategoryChange}>
                            {category}


                        </button>
                    </li>
                ))}
            </ul>
            <div
                className="images grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-4/5 overflow-hidden">
                {filteredProjects.map(project => (
                    <div key={project.id}
                         className={`card | w-full h-48 relative rounded-2xl overflow-hidden bg-cover bg-${project.bg} grid items-end after:block after:bg-black after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-50 after:z-10`}>
                        <div className="content | px-4 pb-2 h-max z-20 bg-gradient-to-t from-black via-gray-900">
                            <h5 className='title | text-white uppercase relative w-max py-1 after:block after:h-1 after:mb-1 after:absolute after:-left-4 after:bg-yellow-400'>
                                {project.title}
                            </h5>
                            <p className='text | text-xs text-white h-11'>
                                {project.description}
                                {project.link !== "none" &&
                                    <a href={project.link} className='text-[10px] text-yellow-400'> more</a>}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectDisplay;
