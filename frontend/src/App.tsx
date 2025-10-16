import Navbar from './components/Navbar'
import PieceCard from "@/components/PieceCard"
import { Input } from "@/components/ui/input"
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <Input type="search" placeholder="Search..."/>
      <div className="flex gap-4 min-h-svh flex-row items-center justify-center">
        <PieceCard title="Piece 1"/>
        <PieceCard title="Piece 750"/>
        <PieceCard title="Test Piece"/>
      </div>
    </div>
  );
}

export default App;
