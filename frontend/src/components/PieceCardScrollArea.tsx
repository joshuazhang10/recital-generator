import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function PieceCardScrollArea({ pieceCards }) {
    return (
        <ScrollArea className="w-full">
            <div className="flex gap-4 px-4 py-2">
                {pieceCards}
            </div>
            <ScrollBar orientation="horizontal"/>
        </ScrollArea>
    );
};