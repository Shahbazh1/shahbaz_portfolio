// src/app/ProjectDetails/page.jsx
import React, { Suspense } from "react";
import ProjectDetailsSection from "../../components/ProjectDetailsSection";

const Page = () => {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading Project...</div>}>
      <ProjectDetailsSection />
    </Suspense>
  );
};

export default Page;
