import React from 'react';
import { FRONT_PAGE_DESC, FRONT_PAGE_NAME } from '../root.link';

const Hero = () => {
  
  return (
    <section className='my-12 px-5 md:my-12 flex flex-row flex-wrap space-y-16 md:space-y-0'>
        <div className='max-w-md mb-auto space-y-5'>
          <h1 className='text-5xl font-black md:text-7xl'>Hello<span className='orange-text'>,</span> I’m {FRONT_PAGE_NAME}</h1>
          <p className='tracking-wide leading-relaxed'>
            {FRONT_PAGE_DESC}{' '}
          </p>
        </div>
        <div className='max-w-md mb-auto space-y-5'>
          <img src='./images/me.jpg' alt=''/>
        </div>
    </section>
  );
};

export default Hero;
