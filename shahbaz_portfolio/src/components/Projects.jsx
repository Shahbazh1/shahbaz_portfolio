"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "../data";

const Projects = () => {


  return (
    <section className="bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-8 lg:flex-row lg:justify-between lg:items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-2 lg:justify-start">
          <span className="text-orange-500">//</span> My Projects
        </h2>

        {/* View All button for large screens */}
        <Link
          href="/Projects"
          className="hidden lg:inline-block border border-gray-300 px-4 py-2 rounded-full text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition w-max"
        >
          View All
        </Link>
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 sm:gap-12">
        {projectsData.slice(0, 2).map((project, index) => {
          const isEven = index % 2 === 0;
          const ProjectWrapper = project.isLink ? Link : "div";
          const wrapperProps = project.isLink ? { href: project.link } : {};

          return (
            <ProjectWrapper
              key={project.id}
              {...wrapperProps}
              className={`flex flex-col gap-6 md:gap-8 ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-xl`}
            >
              {/* Image */}
              <div className="w-full lg:w-[40%] h-52 sm:h-60 md:h-64 lg:h-auto bg-gray-100 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-[60%] p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-500 mb-3">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Fixed button with proper onClick attribute */}
                <Link
                  href={`/ProjectDetails?id=${project.id}`}
                  className="mt-4 text-sm sm:text-base text-gray-800 underline hover:text-orange-500 transition w-max"
                >
                  Read More
                </Link>
              </div>
            </ProjectWrapper>
          );
        })}
      </div>

      {/* View All button below projects for small/medium screens */}
      <div className="mt-8 flex justify-center lg:hidden">
        <Link
          href="/Projects"
          className="border border-gray-300 px-6 py-2 rounded-full text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Projects;
