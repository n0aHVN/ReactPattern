import React from 'react';
import Modal from './modal';
import Accordion from './accordion';


// Main Component showcasing both compound components
export default function Compound() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Compound Component Pattern</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          This pattern allows multiple components to work together as a unit, sharing state and behavior implicitly.
        </p>
      </div>

      {/* Modal Example */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modal Compound Component</h2>
        <p className="text-gray-600 mb-6">
          Click the button to see the compound modal in action:
        </p>
        
        <Modal>
          <Modal.Trigger>
            Open Modal
          </Modal.Trigger>
          
          <Modal.Content>
            <Modal.Header>
              Compound Modal Example
            </Modal.Header>
            
            <Modal.Body>
              <p>This modal is built using the compound component pattern!</p>
              <p className="mt-2">Each part (Trigger, Content, Header, Body, Footer) works together seamlessly.</p>
            </Modal.Body>
            
            <Modal.Footer>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Close
              </button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </section>

      {/* Accordion Example */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accordion Compound Component</h2>
        <p className="text-gray-600 mb-6">
          An accordion that allows single or multiple items to be open:
        </p>
        
        <Accordion allowMultiple={false}>
          <Accordion.Item id="item1">
            <Accordion.Trigger>What is the Compound Pattern?</Accordion.Trigger>
            <Accordion.Content>
              The Compound Component pattern is a React pattern where multiple components 
              work together to form a complete UI element. It provides a flexible and 
              declarative API for complex components.
            </Accordion.Content>
          </Accordion.Item>
          
          <Accordion.Item id="item2">
            <Accordion.Trigger>When should I use it?</Accordion.Trigger>
            <Accordion.Content>
              Use this pattern when you have a component that needs multiple parts 
              working together, like modals, dropdowns, accordions, or any complex 
              UI that benefits from a declarative API.
            </Accordion.Content>
          </Accordion.Item>
          
          <Accordion.Item id="item3">
            <Accordion.Trigger>What are the benefits?</Accordion.Trigger>
            <Accordion.Content>
              <ul className="list-disc list-inside space-y-1">
                <li>Flexible and reusable components</li>
                <li>Clean and declarative API</li>
                <li>Separation of concerns</li>
                <li>Easy to maintain and extend</li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>

      {/* Code Example */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Usage Example</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
{`<Modal>
  <Modal.Trigger>Open Modal</Modal.Trigger>
  <Modal.Content>
    <Modal.Header>Title</Modal.Header>
    <Modal.Body>Content goes here</Modal.Body>
    <Modal.Footer>
      <Modal.CloseButton />
    </Modal.Footer>
  </Modal.Content>
</Modal>`}
          </pre>
        </div>
      </section>
    </div>
  )
}
