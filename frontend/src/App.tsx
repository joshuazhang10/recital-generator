import Navbar from './components/Navbar'
import PieceCard from "@/components/PieceCard"
import './App.css'

function App() {

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
