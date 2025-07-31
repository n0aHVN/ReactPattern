import React from 'react'
import type { ReactNode } from 'react'

export interface BodyProps {
  children: ReactNode
}

const Body = ({ children }: BodyProps) => {
  return (
    <div className="px-6 py-4 text-gray-700">
      {children}
    </div>
  )
}

export default Body;
