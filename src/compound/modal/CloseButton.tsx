import React from 'react'
import { useModalContext } from './Modal'

const CloseButton = () => {
  const { toggle } = useModalContext()
  return (
    <button
      onClick={toggle}
      className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-full transition-colors"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )
}

export default CloseButton;
