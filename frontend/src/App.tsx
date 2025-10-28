import Navbar from './components/Navbar'
import { PieceCard, type PieceCardProps } from "@/components/PieceCard"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import './App.css'
import { useEffect, useState } from 'react'
import { PieceCardScrollArea } from '@/components/PieceCardScrollArea'

function App() {
    const [pieces, setPieces] = useState<PieceCardProps[]>([]);

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_BASE_URL}/api/piece/get-pieces`
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('API get-pieces failure');
            }
            return response.json();
        })
        .then(data => setPieces(data));
        // TODO: error handling
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
        {/* <div className="flex flex-wrap gap-6 justify-center items-start min-h-svh px-4"> */}
        {/* <div className="flex gap-4 min-h-svh flex-row items-center justify-center">
        </div> */}
        <PieceCardScrollArea pieceCards={pieces.map((piece, index) => (
            <PieceCard key={index} title={piece.title} composer={piece.composer} duration={piece.duration} notes={piece.notes}/>
        ))}/>
    </div>
    );
}

export default App;
