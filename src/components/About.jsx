import React from 'react';
import Heading from './sub_components/Heading';
import Paragraph from './sub_components/Paragraph';
import { aboutSections } from './contents/aboutContent.jsx';

const About = () => {
  return (
    <section 
      id='about'
      className='relative min-h-screen w-full px-4 py-8 
      sm:px-6 sm:py-12 
      md:px-8 md:py-16 
      lg:px-10 lg:py-20'
    >
      <div className="flex items-start flex-col w-full max-w-4xl">
        <Heading content={"About Me"} value={0.85}/>
        
        {/* Main "What I Do" title */}
        <div className="text-blue-500 font-bold text-base sm:text-lg md:text-xl font-mono mb-4 sm:mb-6 md:mb-8">
          What I Do
        </div>
        
        {/* Individual Paragraph components */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 overflow-hidden">
          {aboutSections.map((section) => (
            <Paragraph 
              key={section.id}
              title={section.title}
              items={section.items}
              isBold={section.isBold}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;