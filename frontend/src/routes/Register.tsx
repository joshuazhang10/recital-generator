import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Register() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                    Enter email
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                </form>
            </CardContent>
            <CardFooter>
                <Button type="submit" className="w-full" variant="contrast">
                    Login
                </Button>
            </CardFooter>
        </Card>
    );
}

export default Register;