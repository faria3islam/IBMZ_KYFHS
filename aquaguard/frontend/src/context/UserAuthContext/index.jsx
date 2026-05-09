import React, { createContext, useContext, useMemo } from 'react';

const UserAuthContext = createContext({ isUserAuthenticated: false });

export function UserAuthProvider({ children }) {
  const value = useMemo(() => ({ isUserAuthenticated: false }), []);

  return <UserAuthContext.Provider value={value}>{children}</UserAuthContext.Provider>;
}

export function useUserAuth() {
  return useContext(UserAuthContext);
}
