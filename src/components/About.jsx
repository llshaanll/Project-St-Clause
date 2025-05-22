import React from 'react';
import Heading from './sub_components/Heading';
import Paragraph from './sub_components/Paragraph';
import { aboutSections } from './contents/aboutContent.jsx';

const About = () => {
  return (
    <section 
      id='about'
      className='relative min-h-screen w-full flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16'
    >
      <Heading content={"About Me"}/>
      
      {/* Main "What I Do" title */}
      <div className="text-blue-500 font-bold text-sm font-mono mb-6">
        What I Do
      </div>
      
      {/* Individual Paragraph components for each section */}
      {aboutSections.map((section) => (
        <Paragraph 
          key={section.id}
          title={section.title}
          items={section.items}
          isBold={section.isBold}
        />
      ))}
      
    </section>
  );
};

export default About;