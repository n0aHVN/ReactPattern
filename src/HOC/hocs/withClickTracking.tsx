import React, { useState, useCallback } from 'react';

/**
 * HOC that adds click tracking functionality to any component
 * @param WrappedComponent - The component to wrap
 * @returns Enhanced component with click tracking
 */
const withClickTracking = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  const WithClickTrackingComponent = (props: T) => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = useCallback(() => {
      setClickCount(prev => {
        const newCount = prev + 1;
        
        // Log to console (in real app, send to analytics service)
        console.log(`[Analytics] Component clicked ${newCount} times`, {
          component: WrappedComponent.displayName || WrappedComponent.name,
          timestamp: new Date().toISOString(),
          clickCount: newCount
        });

        return newCount;
      });
    }, []);

    return (
      <div 
        onClick={handleClick} 
        style={{ cursor: 'pointer' }}
        className="click-tracked-component"
      >
        <WrappedComponent {...props} />
        <div className="click-counter" style={{ 
          fontSize: '12px',
          color: '#666',
          marginTop: '5px',
          textAlign: 'center'
        }}>
          Clicks: {clickCount}
        </div>
      </div>
    );
  };

  WithClickTrackingComponent.displayName = `withClickTracking(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithClickTrackingComponent;
};

export default withClickTracking;
