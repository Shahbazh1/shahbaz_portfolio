// app/components/ProjectDetailsSection.tsx
'use client'
import Image from "next/image";
import projectsData from '../../src/data.js';
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";

export default function ProjectDetailsSection() {
  const searchParams = useSearchParams();
  const [projectId, setProjectId] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get('id');
    setProjectId(id);
    console.log("Project ID:", id); // Debugging line
  }, [searchParams]);

  // Show loading until projectId is available
  if (!projectId) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  }

  const mainProject = projectsData.find(
    (project) => project.id === parseInt(projectId)
  ) || projectsData[0]; // fallback to first project

  const otherProjects = projectsData.filter(project => project.id !== mainProject.id);

  const renderLinkIcon = ( string) => {
    switch(type) {
      case 'github':
        return <FaGithub />;
      case 'live':
        return <FaExternalLinkAlt />;
      default:
        return <FaExternalLinkAlt />;
    }
  };

  return (
    <section className="w-full bg-[#f3f2ef] py-6 sm:py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Breadcrumb */}
        <p className="mb-4 text-sm text-gray-500">
         <Link href="/Projects">Projects</Link> / <span className="text-gray-700">{mainProject.title}</span>
        </p>

        {/* Title */}
        <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-semibold text-gray-800">
          {mainProject.title}
        </h1>

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Image */}
          <div className="col-span-1 lg:col-span-2 rounded-xl bg-white shadow-sm">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
              <Image
                src={mainProject.image}
                alt={mainProject.alt}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Side Cards */}
          <div className="space-y-4 sm:space-y-6">
            {/* Project Links */}
            <div className="rounded-xl bg-white p-4 sm:p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-gray-800">Project Links</h3>
              <div className="flex flex-col gap-2">
                {mainProject.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-orange-500 px-3 sm:px-4 py-2 text-sm sm:text-base text-white hover:bg-orange-600 transition-colors"
                  >
                    {renderLinkIcon(link.type)}
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="rounded-xl bg-white p-4 sm:p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-gray-800">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {mainProject.tags.map((tag, index) => (
                  <span key={index} className="rounded-full border px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-6 rounded-xl bg-white p-4 sm:p-6 shadow-sm">
          <h3 className="mb-3 font-semibold text-gray-800">About the Project</h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-600">
            {mainProject.description}
          </p>
        </div>

        {/* Features */}
        <div className="mt-6 rounded-xl bg-white p-4 sm:p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-gray-800">Key Features</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
            {mainProject.features.map((feature, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-orange-500">●</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Other Projects */}
        <div className="mt-10">
          <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-gray-800">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project) => (
              <Link
                key={project.id}
                href={`/ProjectDetails?id=${project.id}`}
                className="block rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={400}
                  height={220}
                  className="rounded-t-xl w-full h-48 sm:h-52 md:h-56 object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h4 className="font-medium text-gray-800 text-sm sm:text-base">
                    {project.title}
                  </h4>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-2 sm:mt-3 flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs sm:text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs sm:text-sm text-gray-500 px-2 py-1">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
