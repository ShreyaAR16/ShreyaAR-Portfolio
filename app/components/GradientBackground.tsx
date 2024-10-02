'use client'

import React, { useEffect, useState } from 'react'
import AnimatedStar from './AnimatedStar'

const generateStars = (count: number) => {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1, // Increased minimum size
    delay: Math.random() * 2,
  }))
}

export default function GradientBackground({ children }: { children: React.ReactNode }) {
  const [stars, setStars] = useState<{ top: string; left: string; size: number; delay: number }[]>([])

  useEffect(() => {
    setStars(generateStars(100)) // Increased number of stars
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-900 text-white relative overflow-hidden">
      {stars.map((star, index) => (
        <AnimatedStar key={index} top={star.top} left={star.left} size={star.size} delay={star.delay} />
      ))}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}