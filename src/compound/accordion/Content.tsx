import React from 'react'
import type { ReactNode } from 'react'
import { useAccordionContext } from './Accordion'

export interface AccordionContentProps {
  children: ReactNode
  itemId?: string
}

const AccordionContent = ({ children, itemId }: AccordionContentProps) => {
  const { activeItems } = useAccordionContext()
  if (!itemId || !activeItems.has(itemId)) return null
  return (
    <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-100">
      {children}
    </div>
  )
}

export default AccordionContent;
