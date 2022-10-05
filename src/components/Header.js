import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { RESUME_PATH } from '../root.link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="self-center nav-bar-text whitespace-nowrap dark:text-white">Joshua<span className='orange-text'>.</span></span>
              </div>
              <div className="hidden md:block">
                <div className="ml-72 flex items-baseline space-x-4">
                  <a href="#Experience" className="px-3 py-2 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-2.5">Experience</a>
                  <a href="#Projects" className="px-3 py-2 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-2.5">Projects</a>
                  <a href="#Skill" className="px-3 py-2 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-2.5">Skills</a>
                  <a href="#contact" className="px-3 py-2 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-2.5">Contact</a>
                  <a href={RESUME_PATH} target="_blank" rel="noreferrer" className="px-3 py-2 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-2.5">Resume</a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#Experience" className="text-black hover:bg-gray-700 hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Experience</a>
                <a href="#Projects" className="text-black hover:bg-gray-700 hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                <a href="#Skill" className="text-black hover:bg-gray-700 hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
                 <a href="#contact" className="text-black hover:bg-gray-700 hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                <a href={RESUME_PATH} target="_blank" rel="noreferrer" className="text-black hover:bg-gray-700 hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Resume</a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;