import React from 'react';
import projects from '../projectData';

const Project = () => {
  return (
    <div id="Projects">
      <section className='my-12 px-5' id='projects'>
        <header className='text-2xl font-bold pt-10'>
          <h2>UX Portfolio</h2>
        </header>
        <div className='my-7 space-y-24'>
          {projects.map((project, index) => (
            <article className='flex flex-wrap md:justify-between md:items-center' key={index}>
              <picture className={index % 2 === 0 ? 'w-full md:w-6/12 shadow-lg ' : 'w-full md:w-6/12 shadow-lg md:order-1'}>
                <img src={project.image} alt={project.title} />
              </picture>
              <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                <h3 className='uppercase font-bold text-lg'>{project.title}</h3>
                <p>{project.description}</p>
                <div className='flex overflow-auto space-x-3 pb-2 md:flex-wrap'>
                  {project.tools.map((disc, index) => (
                    <span className='border border-gray-500 px-2 py-1 rounded-lg mt-2 text-sm' key={index}>
                      {disc}
                    </span>
                  ))}
                </div>
                <div className='w-auto flex space-x-5 relative '>
                  
                  <a href={project.link} target='_blank' rel='noreferrer' className='px-6 py-3 text-white no-underline bg-josh-orange rounded hover:bg-black hover:text-white'>
                    Case Study
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;