import React from 'react'
import type { ReactNode } from 'react'
import { useAccordionContext } from './Accordion'

export interface AccordionTriggerProps {
  children: ReactNode
  itemId?: string
}

const AccordionTrigger = ({ children, itemId }: AccordionTriggerProps) => {
  const { activeItems, toggleItem } = useAccordionContext()
  if (!itemId) return null
  const isActive = activeItems.has(itemId)
  return (
    <button
      onClick={() => toggleItem(itemId)}
      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex justify-between items-center group"
    >
      <span className="font-medium text-gray-900 group-hover:text-blue-600">{children}</span>
      <svg 
        className={`w-5 h-5 transition-transform text-gray-400 group-hover:text-blue-600 ${isActive ? 'rotate-180' : ''}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

export default AccordionTrigger;
