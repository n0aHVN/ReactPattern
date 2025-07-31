import React from 'react';

export interface DataDisplayProps {
  title: string;
  data?: {
    message: string;
    timestamp: number;
    url?: string;
  };
}

const DataDisplay: React.FC<DataDisplayProps> = ({ title, data }) => (
  <div className="data-display">
    <h3>{title}</h3>
    {data && (
      <div>
        <p>{data.message}</p>
        <small>Fetched at: {new Date(data.timestamp).toLocaleTimeString()}</small>
        {data.url && <small> from {data.url}</small>}
      </div>
    )}
  </div>
);

DataDisplay.displayName = 'DataDisplay';

export default DataDisplay;
