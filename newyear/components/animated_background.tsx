"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Defines the structure of a Star object.
interface StarProps {
    id: number,
    x: number,
    y: number,
    size: number,
    opacity: number,
    duration: number,
}

// The number of stars to be rendered. here we have 100 stars.
const STAR_COUNT = 100;

export function AnimatedBackground(){
    const [stars, setStars] = useState<StarProps[]>([]);
    
    useEffect(() => {
        const newStars = Array.from({ length: STAR_COUNT}, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.3,
            duration: Math.random() * 3 + 2,
        }))
        setStars(newStars);
    }, []);

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none'>
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className='absolute rounded-full bg-white'
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        // repeatType: 'reverse',
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}
