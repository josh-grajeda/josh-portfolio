import React from 'react'
import workHistory from '../ExData'
import './style.ex.css'
import { RESUME_PATH } from '../root.link';

function Experience() {
    return (
        <div id="Experience">
            <section className='my-12 px-5' id='projects'>
                <header className='text-2xl font-bold'>
                    <h2>Experience</h2>
                </header>
                <div className='lg:visible hidden md:block'>
                    <div className="main-cont">
                        <section id="cd-timeline" className="cd-container">
                            {/*  */}
                            {workHistory && workHistory.map((work) => (
                                <div className="cd-timeline-block">
                                    <div className="cd-timeline-img cd-picture"></div>
                                    <div className="cd-timeline-content">
                                        <h1 className="uppercase font-bold text-2xl pl-3 pt-2 flex h1-orange">{work?.companyName}</h1>
                                        <h4 className="uppercase font-bold text-base pl-3 pt-2" key={work.id}>{work?.role}</h4>

                                        <div className="timeline-content-info">
                                            <h5 className='text-sm' >{work.duration}</h5>
                                        </div>
                                        <div className='pl-2'>
                                            {work?.workDes && work.workDes.map((x) => (
                                                <h4 className='text-sm pt-2'> <span className="text-lg" key={x}>-</span> {x} </h4>
                                            ))}
                                            
                                        </div>
                                        <div className='flex overflow-auto space-x-3 pb-2 md:flex-wrap'>
                                            {work?.exposer && work.exposer.map((ex, index) => (
                                                <span className='border border-gray-500 px-2 py-1 mt-3 ml-1 rounded-lg text-sm' key={index}>
                                                    {ex}
                                                </span>
                                            ))}                   
                                        </div>
                                        
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
                <div className='lg:block lg:invisible grid place-items-center'>
                    <br/>
                    <a href={RESUME_PATH} target='_blank' rel='noreferrer' className="px-6 py-3 text-white no-underline bg-josh-orange rounded hover:bg-black hover:text-white">Resume</a>
                </div>
            </section>
        </div>
    )
}

export default Experience;
