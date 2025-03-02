import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SidebarProvider } from './components/ui/sidebar.tsx'
import { AppSidebar } from './components/appsidebar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <App />
    </SidebarProvider>
  </StrictMode>,
)
