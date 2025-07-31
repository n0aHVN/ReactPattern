import React from "react";

interface WithAuthProps {
  isAuthenticated?: boolean;
}

/**
 * HOC that handles authentication protection for components
 * @param WrappedComponent - The component to wrap
 * @returns Enhanced component with authentication check
 */
//WrappedComponent is any valid React component
// (function or class) that accepts props of type T.
const withAuth = <T extends object>(
  WrappedComponent: React.ComponentType<T>
) => {
    //WithAuthComponent will take props of type T and WithAuthProps
  const WithAuthComponent = (props: T & WithAuthProps) => {
    const { isAuthenticated, ...restProps } = props;

    if (!isAuthenticated) {
      return (
        <div
          className="auth-denied"
          style={{
            color: "#721c24",
            backgroundColor: "#f8d7da",
            border: "1px solid #f5c6cb",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          Access Denied! Please log in.
        </div>
      );
    }

    // Filter out isAuthenticated prop and pass only the props the wrapped component expects
    return <WrappedComponent {...(restProps as T)} />;
  };

  WithAuthComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WithAuthComponent;
};

export default withAuth;
export type { WithAuthProps };
