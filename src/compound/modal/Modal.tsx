import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface ModalContextType {
  isOpen: boolean
  toggle: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('Modal compound components must be used within Modal')
  }
  return context
}

export interface ModalProps {
  children: ReactNode
  defaultOpen?: boolean
}

const Modal = ({ children, defaultOpen = false }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const toggle = () => setIsOpen(prev => !prev)
  return (
    <ModalContext.Provider value={{ isOpen, toggle }}>
      <div className="modal-container">
        {children}
      </div>
    </ModalContext.Provider>
  )
}

export default Modal;
