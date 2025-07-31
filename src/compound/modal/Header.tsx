import React from 'react'
import type { ReactNode } from 'react'
import CloseButton from './CloseButton'

export interface HeaderProps {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
      <h2 className="text-xl font-semibold text-gray-900">{children}</h2>
      <CloseButton />
    </div>
  )
}

export default Header;
