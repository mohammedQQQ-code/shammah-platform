import { User } from '@/types';

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const response = await fetch('/api/auth/me');
    if (!response.ok) return null;
    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error('Failed to get current user:', error);
    return null;
  }
};

export const validateToken = (token: string): boolean => {
  // Basic validation - implement JWT validation
  return !!token && token.length > 0;
};

export const getAuthHeader = (): Record<string, string> => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};
