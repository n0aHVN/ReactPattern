import React from 'react';

/**
 * HOC that adds a border and padding to any component
 * @param WrappedComponent - The component to wrap
 * @returns Enhanced component with border styling
 */

const withBorder = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  const WithBorderComponent = (props: T) => (
    <div style={{ 
      border: '2px solid #007bff', 
      padding: '16px', 
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      <WrappedComponent {...props} />
    </div>
  );

  // Set display name for better debugging
  WithBorderComponent.displayName = `withBorder(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithBorderComponent;
};

export default withBorder;
