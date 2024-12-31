"use client";
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

interface GitHubProps {
    href: string,
}

export default function AnimatedGitHub({ href }: GitHubProps) {
    return (
        <motion.div
            className="absolute top-4 right-4 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
        >
            <Link href={href} target='_blank' rel='noopener noreferrer'>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white bg-opacity-20 p-2 rounded-full backdrop-blur-sm cursor-pointer" 
                >
                    <FaGithub className='w-6 h-6 text-white'/>
                </motion.div>
            </Link>
        </motion.div>
    )
}