import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoute from './ ui/ProtectedRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute
                <AppLayout />
              </ProtectedRoute>
            }
          >            
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
