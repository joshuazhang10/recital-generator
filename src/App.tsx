import { useState } from 'react'
import { Button } from "@/components/ui/button"
import PieceCard from "@/components/PieceCard"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <PieceCard />
    </div>
  )
}

export default App
