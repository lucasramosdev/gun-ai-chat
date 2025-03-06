import { useContext, useState } from "react"
import { SidebarContext, SidebarTrigger } from "./ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CheckCircle, ChevronDown } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const models = [
  "ChatGPT 4 o1",
  "ChatGPT 4 o1-mini",
  "ChatGPT 3.5",
  "Gemini 2.0",
]

export function Header() {
  const context = useContext(SidebarContext)
  const [selectedModel, setSelectedModel] = useState<string>("")

  const onChangeModel = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLDivElement
    setSelectedModel(target.textContent || "")
  }

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }
  return (
    <div className="w-[100%] h-[60px] flex justify-between items-center shrink">
      <div className="flex items-center pl-2">
        {!context.open && <SidebarTrigger />}
        {!context.openMobile && context.isMobile && <SidebarTrigger />}
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-4 p-2 text-secondary text-base font-bold flex items-center gap-x-1 cursor-pointer rounded-md hover:bg-sidebar lg:text-lg">{selectedModel != "" ? selectedModel : "Modelos"}
            <ChevronDown className="h-5 w-5 lg:mt-1" /> </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-sidebar text-white border-none w-[50vw] max-w-[200px] [&_div]:cursor-pointer">
            {models.map((model, index) =>
            (
              <DropdownMenuItem key={index} onClick={onChangeModel} className="flex justify-between focus:bg-foreground">
                {model}
                {model == selectedModel && <CheckCircle className="text-white" />}
              </DropdownMenuItem>

            )
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Avatar className="relative mr-4 lg:mr-12">
        <AvatarImage src="" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}