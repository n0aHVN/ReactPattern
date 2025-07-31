
import React, { useState, useEffect } from 'react';
import './HOCs.css';

// Import HOCs
import {
  withBorder,
  withLoading,
  withAuth,
  withDataFetching,
  withClickTracking,
  compose,
  withFullEnhancement
} from './hocs/index';

// Import Components
import { UserCard, DataDisplay, SimpleButton } from './components/index';

// ========== Enhanced Components ==========

// Single HOC enhancement
const BorderedUserCard = withBorder(UserCard);

// Multiple HOCs composition using compose utility
const EnhancedUserCard = withFullEnhancement(UserCard);

// Alternative manual composition (same result as above)
const ManualEnhancedUserCard = withBorder(withLoading(withAuth(UserCard)));

// Data fetching HOC
const DataDisplayWithFetching = withDataFetching('/api/users')(DataDisplay);

// Click tracking HOC
const TrackedButton = withClickTracking(withBorder(SimpleButton));

// Alternative simple component for demonstration
// This is a HOC, because it receives DataDisplay as a prop
// , and returns a new component with data fetching logic
const DataWithFetching: React.FC<{ title: string }> = ({ title }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData({ message: 'Data from /api/users', timestamp: Date.now() });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <div>Fetching data...</div>;

  return <DataDisplay title={title} data={data} />;
};

// ========== Main Component ==========

const HOCs: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  const toggleLoading = () => setIsLoading(!isLoading);

  return (
    <div className="hoc-container">
      <h1>Higher-Order Components (HOCs) Pattern</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <p>
          A Higher-Order Component (HOC) is a pattern where a function takes a component 
          and returns a new component with enhanced functionality.
        </p>
        <p><em>This example demonstrates proper file organization and separation of concerns.</em></p>
      </div>

      <section className="hoc-section">
        <h2>1. Basic Border Enhancement</h2>
        <p>Using <code>withBorder</code> HOC from <code>./hocs/withBorder.tsx</code></p>
        <BorderedUserCard 
          name="John Doe" 
          email="john@example.com" 
        />
      </section>

      <section className="hoc-section">
        <h2>2. Multiple HOCs Composition</h2>
        <p>Using <code>compose</code> utility for clean HOC composition</p>
        <div className="hoc-controls">
          <button onClick={toggleAuth}>
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
          <button onClick={toggleLoading}>
            Toggle Loading: {isLoading ? 'ON' : 'OFF'}
          </button>
        </div>
        
        <h3>Using compose utility:</h3>
        <EnhancedUserCard 
          name="Jane Smith" 
          email="jane@example.com"
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />

        <h3>Manual composition (same result):</h3>
        <ManualEnhancedUserCard 
          name="Bob Johnson" 
          email="bob@example.com"
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
      </section>

      <section className="hoc-section">
        <h2>3. Data Fetching HOC</h2>
        <p>Using <code>withDataFetching</code> HOC with proper error handling</p>
        
        <h3>Simple implementation:</h3>
        <DataWithFetching title="User Data" />
        
        <h3>Using proper HOC pattern:</h3>
        <DataDisplayWithFetching title="HOC Pattern Data" />
      </section>

      <section className="hoc-section">
        <h2>4. Click Tracking HOC</h2>
        <p>Using <code>withClickTracking</code> HOC (check console for analytics)</p>
        <TrackedButton text="Click Me!" />
      </section>

      <section className="info-section">
        <h2>🏗️ File Structure Benefits:</h2>
        <ul>
          <li><strong>Separation of Concerns:</strong> Each HOC has its own file</li>
          <li><strong>Reusability:</strong> HOCs can be imported and used across the app</li>
          <li><strong>Testability:</strong> Each HOC can be unit tested independently</li>
          <li><strong>Maintainability:</strong> Easier to find and modify specific functionality</li>
          <li><strong>Type Safety:</strong> Proper TypeScript interfaces exported</li>
          <li><strong>Composition:</strong> Utility functions for combining HOCs</li>
        </ul>

        <h3>📁 Project Structure:</h3>
        <pre style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '4px', fontSize: '12px' }}>
{`src/HOC/
├── HOCs.tsx              # Main demo component
├── HOCs.css              # Styles
├── components/           # Base components
│   ├── index.ts
│   ├── UserCard.tsx
│   ├── DataDisplay.tsx
│   └── SimpleButton.tsx
└── hocs/                 # HOC implementations
    ├── index.ts          # Exports & compose utility
    ├── withBorder.tsx
    ├── withLoading.tsx
    ├── withAuth.tsx
    ├── withDataFetching.tsx
    └── withClickTracking.tsx`}
        </pre>
      </section>
    </div>
  );
};

export default HOCs;
