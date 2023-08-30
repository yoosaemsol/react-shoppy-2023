import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  // 1. Check if a logged-in user exists.
  // 2. Verify if that user has admin privileges.
  // * If requireAdmin is true, the user must be logged in and have admin privileges.
  // * If conditions are not met, redirect to the parent path.
  // * Display the provided children only when the conditions are met."

  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
