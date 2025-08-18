import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import Query client and query client provider react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import the react query devtools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a Client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </StrictMode>,
)
