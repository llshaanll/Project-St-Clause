import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const Heading = ({ content, value }) => {
    const headingRef = useRef()
    
    // Optional scroll effect (secondary)
    const { scrollYProgress } = useScroll({
        target: headingRef,
        offset: ["start end", "end start"] // Match Paragraph's tracking range
    })
    
    const y = useTransform(scrollYProgress, [0, 0.3, value, 1], [-100, 0, 0, -100])

    return (
        <h1 className='relative font-mono font-semibold text-4xl font-bold overflow-hidden'>
            <motion.span
                ref={headingRef}
                style={{ y }} // Scroll effects enhance visibility
                className="inline-block origin-center"
            >
                {content}
            </motion.span>
        </h1>
    )
}

export default Heading