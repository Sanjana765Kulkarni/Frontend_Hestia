import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../authContext';

export default function PrivateRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-white">Loading...</div>;
  }

  return currentUser ? children : <Navigate to="/" />;
}