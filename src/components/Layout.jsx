import React, { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';
import ErrorFallback from './ErrorFallback';
import Header from './Header';

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <>
          <Header />
          <main className="mt-8 max-w-[1920px] mx-auto px-8 sm:px-16">
            <ErrorFallback error={error} />
          </main>
        </>
      )}
    >
      <Header />
      <main className="mt-8 max-w-[1920px] mx-auto  px-8 sm:px-16">
        <Outlet />
      </main>
    </ErrorBoundary>
  );
};

export default Layout;
