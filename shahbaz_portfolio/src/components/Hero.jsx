import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4  flex flex-col-reverse md:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            <span className="text-orange-500">I'm</span> Shahbaz Hashmi.
          </h1>

          <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-gray-700">
            <span className="text-orange-500">// </span>
            Currently working as Full Stack Developer at{" "}
            <span className="border-b-2 border-orange-500 pb-0.5">
              Devbay Technologies.
            </span>
          </p>

          <p className="mt-3 sm:mt-4 md:mt-5 text-gray-600 max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0 leading-relaxed text-sm sm:text-base md:text-base">
            Full-Stack Web Developer with a BS in Software Engineering,
            experienced in building responsive web platforms using React,
            Next.js, and modern backend stacks. Focused on performance,
            scalability, and clean user experiences.
          </p>

          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center md:justify-start">
  
  <a href="/Shahbaz_Resume_Full_Stack_Dev.pdf" download className="w-full sm:w-auto">
    <button className="w-full sm:w-auto bg-gray-900 text-white px-6 py-3 sm:px-8 md:px-10 md:py-4 font-medium rounded hover:bg-gray-800 transition">
      Download Resume
    </button>
  </a>

  <Link
    href="/ContactMe"
    className="w-full sm:w-auto text-center border border-gray-900 text-gray-900 px-6 py-3 sm:px-8 md:px-10 md:py-4 font-medium rounded hover:bg-gray-100 transition"
  >
    Contact Me
  </Link>

</div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end mb-8 md:mb-0 flex-1">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden relative">
            <Image
              src="/hero_img.webp"
              alt="Muhammad Shahbaz Fareed Hashmi - Expert MERN Stack & React Developer"
              fill
              
              className="object-cover"
              priority
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
            />
          </div>

          {/* Emoji bubble */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-6 md:right-10 bg-white w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow flex items-center justify-center z-10">
            <span className="text-base sm:text-lg md:text-xl">👋</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
