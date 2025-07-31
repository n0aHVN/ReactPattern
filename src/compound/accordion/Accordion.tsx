import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface AccordionContextType {
  activeItems: Set<string> // Set of currently active item IDs
  toggleItem: (id: string) => void  // Function to toggle active state of an item
  allowMultiple: boolean    // Allow multiple items to be open
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

// Hook to access the Accordion context
export const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    // If context is not found, throw an error to ensure Accordion components are used correctly
    // This helps catch errors where Accordion components are used outside of the Accordion provider
    throw new Error('Accordion compound components must be used within Accordion')
  }
  return context
}

export interface AccordionProps {
  children: ReactNode
  allowMultiple?: boolean
  defaultActiveItems?: string[]
}

const Accordion = ({ children, allowMultiple = false, defaultActiveItems = [] }: AccordionProps) => {
  const [activeItems, setActiveItems] = useState(new Set(defaultActiveItems))
  // Function to toggle active state of an item
  // This function receives an item ID and check if it is already active
  // If it is, it removes it from the active set; if not, it adds it
  const toggleItem = (id: string) => {
    setActiveItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(id)
      }
      return newSet
    })
  }
  return (
    <AccordionContext.Provider value={{ activeItems, toggleItem, allowMultiple }}>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export default Accordion;
