import React from "react";
import { FaBuilding } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10  md:mb-12 text-center lg:text-left">
          <span className="text-orange-500">//</span> Work Experience
        </h2>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 md:pl-10">
          {/* Vertical Line */}
          <div className="absolute left-3 sm:left-4 md:left-5 top-0 h-full w-[2px] bg-orange-500"></div>

          {/* Item 1 */}
          <div className="relative mb-8 sm:mb-10 md:mb-14">
            <span className="absolute -left-[22px] sm:-left-[25px] md:-left-[28px] top-1 w-5 h-5 rounded-full bg-orange-500 border-4 border-white"></span>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
              <div className="sm:flex-[0.65]">
                <h3 className="text-lg sm:text-xl font-semibold text-orange-500">
                  Junior Web Developer
                </h3>
                <p className="text-gray-600 flex items-center gap-2 mt-1 text-sm sm:text-base">
                  <FaBuilding className="text-sm" />
                  Devbay Technologies
                </p>
                <ul className="mt-3 sm:mt-4 space-y-3 text-gray-600 text-sm sm:text-base">
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 shrink-0"></span>
                    <p>
                      Developing scalable MERN & Next.js (TypeScript)
                      applications with backend and Strapi CMS deployed on VPS
                      servers.
                    </p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 shrink-0"></span>
                    <p>
                      Enhanced performance using Cloudflare CDN caching, DNS
                      management, and ISR to reduce server load and improve
                      response speed.{" "}
                    </p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 shrink-0"></span>
                    <p>
                      Managing APIs, MySQL databases, and production
                      deployments.
                    </p>
                  </li>
                </ul>
              </div>
              <span className="text-gray-500 mt-2 sm:mt-0 whitespace-nowrap text-sm sm:text-base">
                Dec 2025 - Current
              </span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative mb-8 sm:mb-10 md:mb-14">
            <span className="absolute -left-[22px] sm:-left-[25px] md:-left-[28px] top-1 w-5 h-5 rounded-full bg-orange-500 border-4 border-white"></span>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
              <div className="sm:flex-[0.65]">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Mern Stack Intern
                </h3>
                <p className="text-gray-600 flex items-center gap-2 mt-1 text-sm sm:text-base">
                  <FaBuilding className="text-sm" />
                  Nitensclue
                </p>
                <ul className="mt-3 sm:mt-4 space-y-3 text-gray-600 text-sm sm:text-base">
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 shrink-0"></span>
                    <p>
                      Developed a modern, responsive frontend for the
                      <span className="font-medium text-gray-900">
                        {" "}
                        Nitensclue official website
                      </span>
                      , focusing on clean UI, performance, and cross-device
                      compatibility.
                    </p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 shrink-0"></span>
                    <p>
                      Worked on a long-term
                      <span className="font-medium text-gray-900">
                        {" "}
                        US-based eCommerce project
                      </span>
                      , identifying bugs, fixing critical issues, and
                      implementing new features to improve stability and user
                      experience.
                    </p>
                  </li>
                </ul>
              </div>
              <span className="text-gray-500 mt-2 sm:mt-0 whitespace-nowrap text-sm sm:text-base">
                Aug 2025 - Oct 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
