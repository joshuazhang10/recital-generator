import Navbar from './components/Navbar'
import PieceCard from "@/components/PieceCard"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import './App.css'
import { useEffect } from 'react'

function App() {

    useEffect(() => {
        fetch('')
    }, []);

    return (
        <div>
        <header className="inline-flex">
            <Navbar />
            <Avatar>
            <AvatarImage />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </header>
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
