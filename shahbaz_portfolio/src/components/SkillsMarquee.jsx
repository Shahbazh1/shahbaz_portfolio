"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiRubyonrails,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSequelize,
  SiRuby,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiCloudflare,
  SiStrapi,
  SiLinux,
  SiNginx,
  SiPostman,
} from "react-icons/si";

import {
  FaGitAlt,
  FaServer,
  FaCode,
  FaUsers,
  FaComments,
  FaPuzzlePiece,
} from "react-icons/fa";

const firstRow = [
  { name: "React.js", icon: SiReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
  { name: "Ruby on Rails", icon: SiRubyonrails, color: "text-red-600" },
  { name: "Ruby", icon: SiRuby, color: "text-red-500" },
];

const secondRow = [
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "Sequelize", icon: SiSequelize, color: "text-blue-500" },
  { name: "ActiveRecord", icon: FaServer, color: "text-red-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-800" },
  { name: "Cloudflare", icon: SiCloudflare, color: "text-orange-500" },
  { name: "Strapi", icon: SiStrapi, color: "text-indigo-600" },
  { name: "VPS", icon: FaServer, color: "text-gray-600" },
  { name: "Linux", icon: SiLinux, color: "text-yellow-500" },
  { name: "Nginx", icon: SiNginx, color: "text-green-600" },
  { name: "REST APIs", icon: FaCode, color: "text-purple-600" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
];

function Card({ item }) {
  const Icon = item.icon;

  return (
    <div
      className="
      group
      min-w-[120px]
      sm:min-w-[140px]
      md:min-w-[160px]
      lg:min-w-[170px]

      h-24
      sm:h-28
      md:h-32

      rounded-2xl
      md:rounded-3xl

      bg-white/80
      backdrop-blur-xl
      border
      border-gray-200

      shadow-md
      hover:shadow-2xl
      hover:shadow-orange-200
      hover:border-orange-400

      transition-all
      duration-500

      hover:-translate-y-2
      hover:scale-105

      flex
      flex-col
      items-center
      justify-center
      cursor-pointer
      px-3
      "
    >
      <Icon
        className={`${item.color}
        text-3xl
        sm:text-4xl
        md:text-5xl
        transition-transform
        duration-700
        group-hover:rotate-[360deg]`}
      />

      <h3
        className="
        mt-2
        text-xs
        sm:text-sm
        md:text-base
        font-semibold
        text-gray-800
        text-center
        "
      >
        {item.name}
      </h3>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section className="relative overflow-hidden mx-auto py-12 sm:py-16 md:py-20 max-w-7xl">

      {/* Background Glow */}


      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-100/30 blur-3xl" />

      <div className="relative mx-auto p-4 max-w-7xl">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center lg:text-left px-4 sm:px-6 lg:px-8">
          <span className="text-orange-500">//</span> Technologies I Work with
        </h2>

        {/* First Row */}

        <div className="overflow-hidden mb-8">

          <div className="marquee flex gap-3 sm:gap-4 md:gap-6 w-max">

            {[...firstRow, ...firstRow].map((item, i) => (
              <Card key={i} item={item} />
            ))}

          </div>

        </div>

        {/* Second Row */}

        <div className="overflow-hidden">

          <div className="marquee-reverse flex gap-3 sm:gap-4 md:gap-6 w-max">

            {[...secondRow, ...secondRow].map((item, i) => (
              <Card key={i} item={item} />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}