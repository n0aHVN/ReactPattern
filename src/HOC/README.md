# Higher-Order Components (HOCs) Pattern

This directory demonstrates the Higher-Order Component pattern in React with proper TypeScript implementation and file organization.

## 🏗️ File Structure

```
src/HOC/
├── HOCs.tsx              # Main demo component
├── HOCs.css              # Styles for the demo
├── README.md             # This documentation
├── components/           # Base components
│   ├── index.ts          # Component exports
│   ├── UserCard.tsx      # User profile component
│   ├── DataDisplay.tsx   # Data display component
│   └── SimpleButton.tsx  # Basic button component
└── hocs/                 # HOC implementations
    ├── index.ts          # HOC exports & utilities
    ├── withBorder.tsx    # Styling enhancement HOC
    ├── withLoading.tsx   # Loading state HOC
    ├── withAuth.tsx      # Authentication HOC
    ├── withDataFetching.tsx # Data fetching HOC
    └── withClickTracking.tsx # Analytics tracking HOC
```

## 🎯 Available HOCs

### 1. `withBorder`
Adds a border and padding to any component for visual enhancement.

```typescript
const EnhancedComponent = withBorder(MyComponent);
```

### 2. `withLoading`
Handles loading states by showing a loading indicator when `isLoading` prop is true.

```typescript
const LoadingComponent = withLoading(MyComponent);
// Usage: <LoadingComponent isLoading={true} />
```

### 3. `withAuth`
Protects components by checking authentication status.

```typescript
const ProtectedComponent = withAuth(MyComponent);
// Usage: <ProtectedComponent isAuthenticated={false} />
```

### 4. `withDataFetching`
Adds data fetching capability with loading and error states.

```typescript
const DataComponent = withDataFetching('/api/endpoint')(MyComponent);
```

### 5. `withClickTracking`
Adds click analytics tracking to any component.

```typescript
const TrackedComponent = withClickTracking(MyComponent);
```

## 🔧 Utility Functions

### `compose`
Utility function for composing multiple HOCs cleanly:

```typescript
// Instead of: withBorder(withLoading(withAuth(Component)))
const EnhancedComponent = compose(withBorder, withLoading, withAuth)(Component);
```

### Pre-composed HOCs
Common combinations are pre-exported for convenience:

```typescript
import { withBorderAndLoading, withAuthAndLoading, withFullEnhancement } from './hocs';
```

## 💡 Best Practices Demonstrated

1. **Separation of Concerns**: Each HOC has its own file
2. **TypeScript Integration**: Proper generic typing and interfaces
3. **Display Names**: Set for better debugging experience
4. **Memory Management**: Cleanup functions in useEffect
5. **Error Handling**: Proper error states and boundaries
6. **Composition**: Clean ways to combine multiple HOCs
7. **Props Forwarding**: Maintaining component interfaces

## 🚀 Usage Examples

### Single HOC
```typescript
import { withBorder } from './hocs';
import { UserCard } from './components';

const BorderedUserCard = withBorder(UserCard);
```

### Multiple HOCs
```typescript
import { compose, withBorder, withLoading, withAuth } from './hocs';
import { UserCard } from './components';

// Method 1: Using compose utility
const EnhancedUserCard = compose(withBorder, withLoading, withAuth)(UserCard);

// Method 2: Manual composition
const ManualEnhancedUserCard = withBorder(withLoading(withAuth(UserCard)));
```

### With TypeScript Props
```typescript
interface MyComponentProps {
  title: string;
  data: any[];
}

const MyComponent: React.FC<MyComponentProps> = ({ title, data }) => (
  <div>{title}: {data.length} items</div>
);

// HOC will maintain type safety
const EnhancedComponent = withBorder(MyComponent);
```

## 🎓 Learning Outcomes

After studying this implementation, you should understand:

- How to create reusable component logic
- TypeScript generic patterns for HOCs
- Component composition strategies
- Proper file organization for scalable React apps
- Memory management in React hooks
- Error handling patterns
- Props forwarding techniques

## 🔍 Key Concepts

- **Cross-cutting Concerns**: Functionality that spans multiple components
- **Component Composition**: Building complex behavior from simple parts
- **Higher-Order Functions**: Functions that operate on other functions
- **Inversion of Control**: HOCs control when and how components render
- **Props Proxy**: HOCs can manipulate props before passing them down
