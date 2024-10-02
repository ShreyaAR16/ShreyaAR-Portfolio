'use client'

import Link from 'next/link'
import { Code, ArrowLeft } from 'lucide-react'
import GradientBackground from '../components/GradientBackground'

export default function Projects() {
  return (
    <GradientBackground>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="inline-block mb-8 hover:text-teal-400 transition-colors">
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">
          <Code className="w-8 h-8 inline-block mr-2" />
          Projects
        </h1>

        <div className="space-y-6">
          <div className="bg-black bg-opacity-30 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">Employee Leave Management System</h2>
            <p>
              Built a web application that enables employees working in a company to apply leave and it is
              managed by an Admin. Designed and Implemented using MySQL and PHP.
            </p>
          </div>
          <div className="bg-black bg-opacity-30 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">Automatic Number Plate Recognition</h2>
            <p>
              Implemented an Automatic Number Plate Recognition (ANPR) system using OpenCV, incorporating
              computer vision techniques like image processing and contour detection. The project, inspired by a
              research paper, showcases hands-on machine learning application in detecting number plate images.
            </p>
          </div>
          <div className="bg-black bg-opacity-30 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">YouTube Comments Analyser</h2>
            <p>
              Built a YouTube Comments Analyzer using the public YouTube API for comment extraction.
              Applied NLTK and POS tagging for sentiment analysis, unveiling insights into diverse user-generated
              content. Proficient in accurately analyzing and facilitating effective grading of sentiments within
              YouTube comments.
            </p>
          </div>
        </div>
      </div>
    </GradientBackground>
  )
}