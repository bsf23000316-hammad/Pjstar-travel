import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { TravelInquiry } from '../types';

interface RouterContextType {
  path: string;
  navigate: (newPath: string, options?: { replace?: boolean; scrollToTop?: boolean }) => void;
  isPlannerOpen: boolean;
  openPlanner: (initialData?: Partial<TravelInquiry>) => void;
  closePlanner: () => void;
  plannerInitialData?: Partial<TravelInquiry>;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [plannerInitialData, setPlannerInitialData] = useState<Partial<TravelInquiry> | undefined>();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((newPath: string, options?: { replace?: boolean; scrollToTop?: boolean }) => {
    if (typeof window !== 'undefined') {
      if (options?.replace) {
        window.history.replaceState({}, '', newPath);
      } else {
        window.history.pushState({}, '', newPath);
      }
      setPath(newPath);

      if (options?.scrollToTop !== false) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  const openPlanner = useCallback((initialData?: Partial<TravelInquiry>) => {
    setPlannerInitialData(initialData);
    setIsPlannerOpen(true);
  }, []);

  const closePlanner = useCallback(() => {
    setIsPlannerOpen(false);
  }, []);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 4500);
  }, []);

  return (
    <RouterContext.Provider
      value={{
        path,
        navigate,
        isPlannerOpen,
        openPlanner,
        closePlanner,
        plannerInitialData,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
