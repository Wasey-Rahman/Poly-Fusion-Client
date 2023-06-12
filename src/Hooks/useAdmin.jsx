import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
  const { user } = useAuth();

  const fetchAdminStatus = async () => {
    try {
      const response = await fetch(`http://localhost:5000/user/admin/${user?.email}`);
      if (!response.ok) {
        throw new Error('Failed to fetch admin status');
      }
      const data = await response.json();
      return data.admin;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch admin status');
    }
  };

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery(
    ['isAdmin', user?.email],
    fetchAdminStatus
  );

  return [isAdmin, isAdminLoading];
};

export default useAdmin;