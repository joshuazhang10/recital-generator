import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type PieceCardProps = {
    title: string;
    composer: string;
    duration: string;
    notes: string;
};

export function PieceCard({ title, composer, duration, notes }: PieceCardProps) {
    return (
        <Card className="w-64 h-64 max-w-sm bg-blue-200 relative">
            <CardHeader className="flex flex-col gap-2 pr-10 pt-1">
                <CardTitle className="text-left">{title}</CardTitle>
                <CardAction className="absolute top-4 right-4">
                    <AddToRecitalButton />
                </CardAction>
                <CardDescription className="text-left">{composer}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{notes.length < 100 ? notes : notes.substring(0, 100) + "..."}</p>
            </CardContent>
            <CardFooter>
                <p>{duration}</p>
            </CardFooter>
        </Card>
    );
}

function AddToRecitalButton() {
    return (
        <Button variant="outline" className="text-lg" size="default">+</Button>
    );
};