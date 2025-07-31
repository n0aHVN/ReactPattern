import React from 'react'
import type { ReactNode } from 'react'
import { useModalContext } from './Modal'

export interface ContentProps {
  children: ReactNode
}

const Content = ({ children }: ContentProps) => {
  const { isOpen, toggle } = useModalContext()
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={toggle}
      />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-0 overflow-hidden transform transition-all">
        {children}
      </div>
    </div>
  )
}

export default Content;
