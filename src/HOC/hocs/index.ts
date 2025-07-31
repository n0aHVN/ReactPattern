// HOCs exports
export { default as withBorder } from './withBorder';
export { default as withLoading, type WithLoadingProps } from './withLoading';
export { default as withAuth, type WithAuthProps } from './withAuth';
export { default as withDataFetching, type WithDataFetchingProps } from './withDataFetching';
export { default as withClickTracking } from './withClickTracking';

// Import for internal use
import withBorder from './withBorder';
import withLoading from './withLoading';
import withAuth from './withAuth';

// Utility function for composing multiple HOCs
export const compose = (...hocs: Array<(component: any) => any>) => {
  return (component: any) => hocs.reduceRight((acc, hoc) => hoc(acc), component);
};

// Common HOC combinations
export const withBorderAndLoading = compose(withBorder, withLoading);
export const withAuthAndLoading = compose(withAuth, withLoading);
export const withFullEnhancement = compose(withBorder, withLoading, withAuth);
