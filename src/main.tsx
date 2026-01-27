import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryProvider } from './providers/query-provider.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { ScrollStateProvider } from './providers/scroll-provider.tsx'
import { MediaQueryStateProvider } from './providers/media-query-provider.tsx'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MediaQueryStateProvider>
      <ScrollStateProvider>
        <QueryProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
      </ScrollStateProvider>
    </MediaQueryStateProvider>
  </StrictMode>,
)
