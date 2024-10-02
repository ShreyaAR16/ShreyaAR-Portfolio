'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, User, Briefcase, Code, GraduationCap, FileDown } from 'lucide-react'
import GradientBackground from './components/GradientBackground'

export default function Home() {


  return (
    <GradientBackground>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="flex justify-end items-center mb-12">
          <div className="flex items-center space-x-4">
            <button className="text-sm px-3 py-1 bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors">
              <User className="w-4 h-4 inline-block mr-1" />
              About
            </button>
            <Link href="/experience" className="text-sm px-3 py-1 bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors">
              <Briefcase className="w-4 h-4 inline-block mr-1" />
              Experience
            </Link>
            <Link href="/projects" className="text-sm px-3 py-1 bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors">
              <Code className="w-4 h-4 inline-block mr-1" />
              Projects
            </Link>
            <Link href="/education" className="text-sm px-3 py-1 bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors">
              <GraduationCap className="w-4 h-4 inline-block mr-1" />
              Education
            </Link>
            
          </div>
        </header>

        <main className="space-y-12">
          <section className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">Hi There!</h2>
              <h3 className="text-4xl font-bold mb-4 text-teal-400">I&apos;m Shreya A R</h3>
              <p className="text-2xl mb-6">Computer Science Engineer</p>
              <div className="space-x-4">
                <a href="/Shreya_AR_Resume.pdf" download className="inline-block text-sm px-4 py-2 bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors">
                  <FileDown className="w-4 h-4 inline-block mr-1" />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/placeholder.svg"
                  alt="Shreya A R"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-semibold mb-4 text-teal-500">More About Me</h2>
            <p>
              Driven by a passion for innovation and technology, I am eager to join a forward-thinking team where I
              can apply my analytical mindset, enhance my expertise, and contribute to meaningful advancements. I
              am committed to staying at the forefront of emerging trends and driving impactful results while
              fostering a culture of continuous improvement within the organization.
            </p>
          </section>

          <div className="flex justify-center items-center">
          <section className="text-center">
          <h2 className="text-4xl font-semibold mb-4 text-teal-500">Let&apos;s Connect!</h2>
          </section>
          </div>


          
        </main>

        <footer className="mt-12 text-center">
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/ShreyaAR16" className="hover:text-teal-400">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/shreya-ar/" className="hover:text-teal-400">
              <Linkedin />
            </a>
            <a href="mailto:shreyaar.16@gmail.com" className="hover:text-teal-400">
              <Mail />
            </a>
          </div>
          <p className="mt-4">© 2024 Shreya A R. All rights reserved.</p>
        </footer>
      </div>
    </GradientBackground>
  )
}