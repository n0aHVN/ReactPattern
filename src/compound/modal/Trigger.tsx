import React from 'react'
import type { ReactNode } from 'react'
import { useModalContext } from './Modal'

export interface TriggerProps {
  children: ReactNode
}

const Trigger = ({ children }: TriggerProps) => {
  const { toggle } = useModalContext()
  return (
    <button 
      onClick={toggle}
      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
    >
      {children}
    </button>
  )
}

export default Trigger;
