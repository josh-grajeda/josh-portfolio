import React from 'react';
import { EMAIL_ID, GITHUB_USERNAME, LINKEDIN_USERNAME, RESUME_PATH } from '../root.link'
const Contact = () => {
  return (
    <div className='my-' id='contact'>
      <header className='px-5 text-2xl font-bold'>
        <h2>Contact Me</h2>
      </header>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <a href={`mailto: ${EMAIL_ID}`} className='border-b-2 mt-3 inline-block border-gray-500'>
              {EMAIL_ID}
            </a>
          </div>
          <a className='border-b-2 mt-3 inline-block border-gray-500' href={RESUME_PATH} target='_blank' rel='noreferrer'>
            Resume
          </a>
          <div className='flex flex-row flex-wrap mt-7'>
            <div className='mr-4'>
              <a href={`https://www.linkedin.com/in/${LINKEDIN_USERNAME}`} target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border bg-josh-orange p-2 rounded-lg text-white text-sm'>
                  <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className='mr-4'>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border bg-josh-orange p-2 rounded-lg text-white text-sm'>
                  <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-josh-blue'>
        <center>made with react</center> <img src='./images/icons/react-original.svg' alt='' className='h-12' />
      </div>
    </div>
  );
};

export default Contact;
