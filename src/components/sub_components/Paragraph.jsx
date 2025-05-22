import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Paragraph = ({ title, items, isBold }) => {
  const paragraphRef = useRef();
  
  const inView = useInView(paragraphRef, {
    once: true,
    amount: 0.5,
    margin: "0px 0px -25% 0px"
  });
  
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start end", "end start"]
  });
  
  const visibility = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-400, 0, 0, -400]);

  return (
    <div className='relative flex items-center mb-8'>
      <motion.div
        ref={paragraphRef}
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        style={{ opacity: visibility, x }}
        transition={{ 
          type: 'spring',
          stiffness: 100,
          damping: 10,
          scale: { duration: 0.5 }
        }}
        className="inline-block w-full"
      >
        <div className="text-sm font-mono">
          <span className={`text-blue-500 ${isBold ? 'font-bold' : ''}`}>
            {title}
          </span>
          <ul className="list-disc pl-5 mt-2">
            {items.map((item, i) => (
              <li key={i}>
                {item.text && <>{item.text} </>}
                {item.highlight && (
                  <span className="text-blue-500">{item.highlight}</span>
                )}
                {item.tools && ` (${item.tools.join(', ')})`}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Paragraph;