import React from 'react'
import type { ReactNode } from 'react'

export interface AccordionItemProps {
  children: ReactNode
  id: string
}

// 1. Loop through children and clone each child element
// 2. If valid, clone the element and pass the itemId prop
// 3. If not valid, return the child as it is
// All children will receive the same itemId prop
// This allows each child to access the itemId for context or functionality
const AccordionItem = ({ children, id }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      {React.Children.map(children, child => 
        React.isValidElement(child) 
          ? React.cloneElement(child, { itemId: id } as any)
          : child
      )}
    </div>
  )
}

export default AccordionItem;
