'use client'

import Link from 'next/link'
import { Code, Github } from 'lucide-react'
import GradientBackground from '../components/GradientBackground'

const projects = [
  {
    title: "YouTube Comments Analyser",
    description: "Developed a Flask web application that analyzes YouTube video comments to assess viewer sentiment using the YouTube Data API and TextBlob for sentiment scoring.",
    repo: "https://github.com/ShreyaAR16/FeelTube"
    
  },
  {
    title: "Rule Engine App",
    description: "Developed a rule engine application to determine user eligibility based on dynamic criteria such as age, department, income, and spending. Utilized Abstract Syntax Tree (AST) to enable flexible creation, combination, and modification of conditional rules.",
    repo: "https://github.com/ShreyaAR16/Rule-Engine"
  },
  {
    title: "AI-Text Summarizer App",
    description: "A full-stack AI text summarizer app using Replit, Node.js, Express, and the Hugging Face API.",
    repo: "https://github.com/ShreyaAR16/AI-Text-Summarizer-App"
  },
  {
    title: "Matrix Partition System",
    description: "A Python script to numerically solve systems of equations using matrix partitioning.",
    repo: "https://github.com/ShreyaAR16/Matrix-Partition"
    
  },
  {
    title: "Weather Forecast App",
    description: "Built a weather forecast application using React and a weather API, providing real-time weather information for any location.",
    repo: "https://github.com/ShreyaAR16/Weather-App"
  },
  {
    title: "ToDo Application",
    description: "Developed a to-do application that allows users to create, manage, and prioritize tasks efficiently. Implemented features like task categorization, due dates, and real-time updates for enhanced user productivity.",
    repo: "https://github.com/ShreyaAR16/ToDo-App"
  }
]

export default function Projects() {
  return (
    <GradientBackground>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/" className="inline-block mb-8 hover:text-teal-400 transition-colors">
          {/* Add your back button content here if needed */}
        </Link>
        
        <h1 className="text-4xl font-bold mb-12 flex items-center">
          <Code className="w-10 h-10 inline-block mr-4" />
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-black bg-opacity-30 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-teal-500">{project.title}</h2>
                <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 text-teal-500 hover:text-teal-400 transition-colors" />
                </Link>
              </div>
              <p className="text-sm flex-grow">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </GradientBackground>
  )
}