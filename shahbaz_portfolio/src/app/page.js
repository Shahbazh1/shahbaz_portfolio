import ContactSection from '@/components/ContactUs'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import SkillsMarquee from "@/components/SkillsMarquee";
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-10 md:gap-16 sm:px-8 md:px-10 lg:px-14 lg:gap-20'>
      <Hero/>
      <SkillsMarquee/>
      <Experience/>
      <Projects/>
      <ContactSection/>
    </div>
  )
}

export default page