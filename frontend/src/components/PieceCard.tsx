import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function PieceCard() {
    return (
        <Card className="w-full max-w-sm bg-blue-200">
            <CardHeader>
                <CardTitle>Gotkovsky Trombone Concerto</CardTitle>
                <CardDescription>French 20th century piece with three movements</CardDescription>
                <CardAction>Add to Recital</CardAction>
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

export default PieceCard;