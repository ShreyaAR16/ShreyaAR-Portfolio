'use client'

import Link from 'next/link'
import { GraduationCap, ArrowLeft } from 'lucide-react'
import GradientBackground from '../components/GradientBackground'

export default function Education() {
  return (
    <GradientBackground>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="inline-block mb-8 hover:text-teal-400 transition-colors">
          
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">
          <GraduationCap className="w-8 h-8 inline-block mr-2" />
          Education
        </h1>

        <div className="space-y-6">
          <div className="bg-black bg-opacity-30 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">Vidyavardhaka College of Engineering</h2>
            <p>BE in Computer Science Engineering</p>
            <p>Visvesvaraya Technological University | CGPA: 8.97 | 2020-2024</p>
          </div>
          <div className="bg-black bg-opacity-30 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">VVS GOLDEN JUBILEE PU COLLEGE</h2>
            <p>KSEEB BOARD | 94% | 2020</p>
          </div>
          <div className="bg-black bg-opacity-30 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">Vidyavardhaka Sangha B M Sri Educational Institutions</h2>
            <p>CBSE | 93% | 2018</p>
          </div>
        </div>
      </div>
    </GradientBackground>
  )
}