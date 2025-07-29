import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Navbar from './components/Navbar'
import PieceCard from "@/components/PieceCard"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="flex gap-4 min-h-svh flex-row items-center justify-center">
        <PieceCard />
        <PieceCard />
        <PieceCard />
      </div>
    </div>
  );
}

export default App;
