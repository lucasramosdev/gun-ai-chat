import {
  Sidebar,
  SidebarContent,
  SidebarContext,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useContext } from "react"

export function AppSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTrigger />
        {/* {context.open && <SidebarTrigger />} */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}