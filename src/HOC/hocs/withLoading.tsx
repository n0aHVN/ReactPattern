import React, { useEffect } from 'react';

interface WithLoadingProps {
  isLoading?: boolean;
}

/**
 * HOC that handles loading state for any component
 * @param WrappedComponent - The component to wrap
 * @returns Enhanced component with loading state handling
 */
const withLoading = <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  const WithLoadingComponent = (props: T & WithLoadingProps) => {
    const { isLoading, ...restProps } = props;
    const [showContent, setShowContent] = React.useState(false);

    useEffect(()=>{
        let timer: ReturnType<typeof setTimeout> |undefined;
        if (isLoading){
            setShowContent(false);
            timer = setTimeout(() => {
                setShowContent(true);
            }, 1000); // Show content after 1 second
        } else {
            setShowContent(true);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [isLoading]);

    if (!showContent) {
      return (
        <div className="loading-state" style={{ padding: '20px', textAlign: 'center' }}>
          Loading...
        </div>
      );
    }
    
    // Filter out isLoading prop and pass only the props the wrapped component expects
    return <WrappedComponent {...(restProps as T)} />;
  };

  WithLoadingComponent.displayName = `withLoading(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithLoadingComponent;
};

export default withLoading;
export type { WithLoadingProps };
