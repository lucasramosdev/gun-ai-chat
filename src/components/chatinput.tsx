import { ArrowUp, ArrowUpCircle } from "lucide-react"
import { Textarea } from "./ui/textarea"

export function ChatInput() {
  return (
    <div
      className="
      flex justify-between items-end
    bg-[#303030] border-none rounded-2xl 
      absolute bottom-12 w-[95%]  lg:w-[100%] lg:max-w-[850px] lg:relative lg:bottom-0"
    >
      <Textarea className="w-[100%]
      focus:outline-none focus:border-none focus:ring-0 focus-visible:border-none focus-visible:ring-0
        text-white text-lg
        border-none
        placeholder:text-[#9B9B9B] placeholder:text-lg
        resize-none
      " placeholder="Pergunte alguma coisa" />
      <div className="rounded-full bg-white mr-2 mb-2 flex justify-center items-center p-1 cursor-pointer hover:bg-[#CECECE]">
        <ArrowUp className="h-6 w-6 text-sidebar" />
      </div>
    </div>
  )
}