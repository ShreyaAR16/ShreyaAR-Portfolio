import React from 'react'

interface AnimatedStarProps {
  top: string
  left: string
  size: number
  delay: number
}

const AnimatedStar: React.FC<AnimatedStarProps> = ({ top, left, size, delay }) => {
  return (
    <div
      className="absolute rounded-full bg-white animate-twinkle"
      style={{
        top,
        left,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        boxShadow: `0 0 ${size/2}px ${size/4}px rgba(255, 255, 255, 0.7)`,
      }}
    ></div>
  )
}

export default AnimatedStar