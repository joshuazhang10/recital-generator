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

function PieceCard({ title } : {title: string}) {
    return (
        <Card className="w-full max-w-sm bg-blue-200">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>French 20th century piece with three movements</CardDescription>
                <CardAction><AddToRecitalButton /></CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}

function AddToRecitalButton() {
    return (
        <Button variant="outline" className="text-lg" size="default">+</Button>
    );
};

export default PieceCard;