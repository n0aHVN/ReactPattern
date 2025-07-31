import React from 'react'
import type { ReactNode } from 'react'

export interface FooterProps {
  children: ReactNode
}

const Footer = ({ children }: FooterProps) => {
  return (
    <div className="flex justify-end gap-3 px-6 py-4 bg-gray-50 border-t border-gray-200">
      {children}
    </div>
  )
}

export default Footer;
