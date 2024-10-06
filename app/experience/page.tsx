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
          • Developed a Log Analyzer Utility for VMware Support Bundles that automated the extraction, comparison, and analysis of configuration data from ESXi host logs, reducing manual effort by up to 40%.
• Led the development of Python scripts for log analysis and troubleshooting, identifying critical issues and generating unified reports for faster resolution.
• Collaborated with engineering teams to improve operational efficiency, enhancing the accuracy and speed of data analysis.
• Demonstrated strong problem-solving skills by analyzing backtrace snippets to troubleshoot system errors and optimize precheck information collection.
• Improved customer satisfaction by streamlining processes and reducing engineering time through automation.
          </p>
        </div>
      </div>
    </GradientBackground>
  )
}