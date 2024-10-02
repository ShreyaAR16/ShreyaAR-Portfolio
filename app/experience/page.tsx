'use client'

import Link from 'next/link'
import { Briefcase} from 'lucide-react'
import GradientBackground from '../components/GradientBackground'

export default function Experience() {
  return (
    <GradientBackground>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="inline-block mb-8 hover:text-teal-400 transition-colors">
          
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">
          <Briefcase className="w-8 h-8 inline-block mr-2" />
          Experience
        </h1>

        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-teal-400">R&D Intern at Hewlett Packard Enterprise (HPE)</h2>
          <p className="mb-2">Feb 2024 - August 2024</p>
          <p>
            Log Analyser Utility - Developed a Log Analyzer Utility that streamlines the extraction of key attributes
            from VMware diagnostic log bundles collected from ESXi hosts. The tool consolidates data into a
            unified configuration file, reducing manual effort and engineering time by up to 40%, significantly
            improving operational efficiency and driving customer satisfaction.
          </p>
        </div>
      </div>
    </GradientBackground>
  )
}