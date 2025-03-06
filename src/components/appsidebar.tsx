import {
  Sidebar,
  SidebarContent,
  SidebarContext,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useContext } from "react"

const ChatGroup = ({ title, chats }: { title: string, chats: string[] }) => {
  return (
    <SidebarGroup className="my-1.5">
      <SidebarGroupLabel className="text-white font-bold">{title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {chats.map((chat: string, index: number) => (
            <SidebarMenuItem key={index} className="text-accent hover:bg-[#212121] hover:text-white rounded-md">
              <SidebarMenuButton asChild className="hover:bg-[#212121] hover:text-white truncate w-[85%]" >
                <span className="cursor-pointer">{chat}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup >
  )
}

const yesterDayChats = [
  "Chat Translate -50%, -50% Tailwind",
  "Alterar tamanho fonte textarea",
  "Div preenche espaço restante"
]

const lastSevenDaysChats = [
  "Sidebar mobile não funciona",
  "MouseEvent target error fix",
  "Ler CSV e Printar Message",
  "Divisão de tráfego ALB",
  "Usar API Open Finance",
  "Limite de linhas CSV",
  "Resolvendo Ctrl+C VS Code"
]

const restDaysChats = [
  "Erro de SSH resolução",
  "Flask Endpoint Exemplo",
  "Pruning modelo BERT",
  "Baixar CSV Github Actions",
  "Obter valores CFOP",
  "Nomes criativos para app",
  "Insert SQL Contatos",
  "Refrigerante em lata amassado",
  "Extrair rating e posição",
  "Error API Pipefy"
]

export function AppSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return (
    <Sidebar className="border-sidebar-border">
      <SidebarHeader>
        {context.open && <SidebarTrigger />}
      </SidebarHeader>
      <SidebarContent className="overflow-x-hidden">
        <ChatGroup title={"Ontem"} chats={yesterDayChats} />
        <ChatGroup title="Últimos 7 dias" chats={lastSevenDaysChats} />
        <ChatGroup title="Dias anterioes" chats={restDaysChats} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}