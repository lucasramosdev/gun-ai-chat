import { ChatInput } from "./components/chatinput"
import { Header } from "./components/header"

function App() {

  return (
    <main className="w-screen h-screen flex flex-col">
      <Header />
      <div className="grow flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-3xl text-white">
          Como posso ajudar?
        </h1>
        <ChatInput />
        <footer className="absolute bottom-0 text-sm text-center">
          <p>
            Os modelos podem cometer erros. Considere verificar informações importantes.
          </p>
        </footer>
      </div>
    </main>
  )
}

export default App
