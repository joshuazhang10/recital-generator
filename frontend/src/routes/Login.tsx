import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { FormEvent } from "react";

const loginUser = (formData: {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
}) => {
    const url = 'http://localhost:8080/api/auth/login-user';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('API login-user failure');
        }
        alert("Successfully logged in!"); // TODO
    })
};

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page from reloading
    const formData = new FormData(e.currentTarget);
    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    loginUser(data);
};

function Login() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                    Login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <div className="inline-block w-full h-20">
                            <div className="grid gap-3">
                                <Label>Email</Label>
                                <Input 
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email@email.com"
                                    required
                                />
                            </div>
                        </div>                        
                        <div className="inline-block w-full h-20">
                            <div className="grid gap-3">
                                <Label>Password</Label>
                                <Input 
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div> 
                    </div>
                    <Button type="submit" className="w-full" variant="contrast">
                        Login
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default Login;