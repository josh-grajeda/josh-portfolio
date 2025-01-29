import React from "react";
import { Languages, Frameworks, Methods } from "../SkillData";

const Skill = () => {
  return (
    <div id="Skill">
      <section className="my-16  px-5">
        <header className="text-2xl font-bold mb-5">
          <h2>Skills</h2>
        </header>
        {Languages?.length > 0 && (
          <div className="pl-3">
            <h2 className="text-xl"> Languages </h2>
            <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center">
              {Languages.map((x, index) => (
                <div
                  className="flex flex-col items-center"
                  tabIndex="0"
                  role="img"
                  aria-label={x.skill}
                  key={index}
                >
                  <img
                    src={x.logo}
                    alt=""
                    key={index}
                    loading="lazy"
                    className="w-16 mb-1"
                    width="64px"
                    height="64px"
                  />
                  {x.skill}
                </div>
              ))}
            </div>
          </div>
        )}
        {Frameworks?.length > 0 && (
          <div className="pl-3">
            <h2 className="text-xl"> Frameworks / Tools </h2>
            <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center">
              {Frameworks.map((x, index) => (
                <div
                  className="flex flex-col items-center"
                  tabIndex="0"
                  role="img"
                  aria-label={x.skill}
                  key={index}
                >
                  <img
                    src={x.logo}
                    alt=""
                    loading="lazy"
                    className="w-16 mb-1"
                    width="64px"
                    height="64px"
                  />
                  {x.skill}
                </div>
              ))}
            </div>
          </div>
        )}

        {Methods?.length > 0 && (
          <div className="pl-3">
            <h2 className="text-xl"> Methods </h2>
            <div className="my-4 grid gap-5 grid-cols-3 md:grid-cols-3 content-center">
              {Methods.map((x, index) => (
                <div
                  className="flex flex-col items-center"
                  tabIndex="0"
                  key={index}
                >
                  <span
                    className="border border-gray-500 bg-josh-gray px-3 py-1 rounded-lg mt-2 text-gray-500 text-sm"
                    key={index}
                  >
                    {x.skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pl-3">
          <h2 className="text-xl"> Certifications </h2>
          <div className="flex w-44 content-center">
            <img src="./images/icons/GCC_badge_UX.png" alt="" />
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Skill;
