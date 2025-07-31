import React from 'react';

export interface UserCardProps {
  name: string;
  email: string;
  isAuthenticated?: boolean;
  isLoading?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, email }) => (
  <div className="user-card">
    <h3>User Profile</h3>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
  </div>
);

UserCard.displayName = 'UserCard';

export default UserCard;
