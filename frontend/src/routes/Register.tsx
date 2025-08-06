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

function Register() {
    const registerUser = (formData: {
        email: FormDataEntryValue | null;
        username: FormDataEntryValue | null; 
        password: FormDataEntryValue | null;
        confirmPassword: FormDataEntryValue | null;
    }) => {
        const url = 'http://localhost:8080/api/auth/register-user';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('API register-user failure');
            }
            alert("Successfully Registered!"); // TODO
        })
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page from reloading
        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get("email"),
            username: formData.get("username"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirm-password"),
        };

        registerUser(data);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                    Create your account
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
                                <Label>Username</Label>
                                <Input 
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Username"
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
                                    required
                                />
                            </div>
                        </div> 
                        <div className="inline-block w-full h-20">
                            <div className="grid gap-3">
                                <Label>Confirm Password</Label>
                                <Input 
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    required
                                />
                            </div>
                        </div> 
                    </div>
                    <Button type="submit" className="w-full" variant="contrast">
                        Create Account
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default Register;