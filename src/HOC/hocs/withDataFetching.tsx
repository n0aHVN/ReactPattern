import React, { useState, useEffect } from 'react';

interface WithDataFetchingProps {
  data?: any;
}

/**
 * HOC that adds data fetching capability to any component
 * @param url - The URL to fetch data from
 * @returns HOC function that enhances components with data fetching
 */
const withDataFetching = (url: string) => {
  return <P extends object>(WrappedComponent: React.ComponentType<P & WithDataFetchingProps>) => {
    const WithDataFetchingComponent = (props: P) => {
      const [data, setData] = useState<any>(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string>('');

      useEffect(() => {
        let isMounted = true;

        // Simulate API call
        const fetchData = async () => {
          try {
            setLoading(true);
            setError('');
            
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            if (isMounted) {
              setData({ 
                message: `Data fetched from ${url}`, 
                timestamp: Date.now(),
                url 
              });
              setLoading(false);
            }
          } catch (err) {
            if (isMounted) {
              setError('Failed to fetch data');
              setLoading(false);
            }
          }
        };

        fetchData();

        // Cleanup function
        return () => {
          isMounted = false;
        };
      }, [url]);

      if (loading) {
        return (
          <div className="loading-state" style={{ 
            padding: '20px', 
            textAlign: 'center',
            color: '#666',
            fontStyle: 'italic'
          }}>
            Fetching data from {url}...
          </div>
        );
      }

      if (error) {
        return (
          <div className="error-state" style={{
            color: '#dc3545',
            padding: '10px',
            backgroundColor: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '4px'
          }}>
            Error: {error}
          </div>
        );
      }

      return <WrappedComponent {...props} data={data} />;
    };

    WithDataFetchingComponent.displayName = `withDataFetching(${WrappedComponent.displayName || WrappedComponent.name})`;

    return WithDataFetchingComponent;
  };
};

export default withDataFetching;
export type { WithDataFetchingProps };
