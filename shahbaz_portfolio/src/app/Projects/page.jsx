// app/components/AllProjectsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import projectsData from "../../data";

export default function AllProjectsSection() {
  const [search, setSearch] = useState("");

  // 🔹 Filter logic
  const filteredProjects = projectsData.filter((project) => {
    const query = search.toLowerCase();

    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <section className="w-full bg-white pb-12 sm:pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 sm:mb-10 flex flex-col gap-3 md:flex-row items-center md:justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            <span className="text-orange-500">//</span> My Projects
          </h2>
        </div>

        {/* Search Bar */}
        <div className="mb-8 sm:mb-10 flex justify-center">
          <div className="relative w-full sm:w-auto md:w-auto lg:w-1/2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects by title, description, or tech stack..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 text-sm sm:text-base outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={project.id}
                  className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-xl"
                >
                  {/* Image */}
                  <div
                    className={`w-full lg:w-[40%] h-[200px] sm:h-[250px] md:h-[300px] bg-gray-100 ${
                      !isEven && "lg:order-2"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full lg:w-[60%] p-4 sm:p-6 md:p-8 flex flex-col justify-between ${
                      !isEven && "lg:pr-12 lg:pl-6"
                    }`}
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2 sm:mb-3">
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <Link
                      href={`/ProjectDetails?id=${project.id}`}
                      className="mt-4 text-sm sm:text-base text-gray-800 underline hover:text-orange-500 transition w-max"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
