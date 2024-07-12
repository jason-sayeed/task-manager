import { ThemeProvider, CssBaseline } from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React, { FC, ReactElement } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Dashboard } from './pages/dashboard/dashboard';
import { customTheme } from './theme/customTheme';

// Create a client
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
