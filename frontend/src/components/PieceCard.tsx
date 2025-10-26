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
        <Card className="w-full max-w-sm bg-blue-200 relative">
            <CardHeader className="flex flex-col gap-2 pr-10 pt-1">
                <CardTitle>{title}</CardTitle>
                <CardAction className="absolute top-4 right-4">
                    <AddToRecitalButton />
                </CardAction>
                <CardDescription className="text-left">French 20th century piece withhhhh three mo is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CardDescription>
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