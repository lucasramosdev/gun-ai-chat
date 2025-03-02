import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SidebarContext, SidebarTrigger } from './components/ui/sidebar'

function App() {
  const [count, setCount] = useState(0)
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }
  return (
    <>
      {!context.open && <SidebarTrigger />}
    </>
  )
}

export default App
