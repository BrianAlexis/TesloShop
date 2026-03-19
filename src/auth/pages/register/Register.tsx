import { toast } from "sonner"
import { Link, useNavigate } from "react-router"
import { useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CustomLogo from "@/components/custom/CustomLogo"
import { useAuthStore } from "@/auth/store/auth.store"

export const RegisterPage = () => {

    const navigate = useNavigate()
    const { register } = useAuthStore()

    const [isPosting, setIsPosting] = useState(false)

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsPosting(true)

        const formData = new FormData(event.target as HTMLFormElement)

        const email = formData.get('email') as string
        const fullName = formData.get('fullName') as string
        const password = formData.get('password') as string

        const ok = await register(email, password, fullName)

        if (ok) {
            navigate("/")
            return
        }

        toast.error("No se pudo crear el usuario")
        setIsPosting(false)
    }

    return (
        <div className={"flex flex-col gap-6"}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">

                    {/* 🔥 ACÁ ESTÁ LA CLAVE */}
                    <form className="p-6 md:p-8" onSubmit={handleRegister}>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <CustomLogo />
                                <p className="text-balance text-muted-foreground">
                                    Create a new account
                                </p>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email" // 👈 IMPORTANTE
                                    type="email"
                                    placeholder="mail@google.com"
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="fullName">Username</Label>
                                <Input
                                    id="fullName"
                                    name="fullName" // 👈 IMPORTANTE
                                    type="text"
                                    placeholder="Username"
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password" // 👈 IMPORTANTE
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isPosting}
                            >
                                Register
                            </Button>

                            <div className="text-center text-sm">
                                Do you have an account?{" "}
                                <Link to="/auth/login/" className="underline underline-offset-4">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </form>

                    <div className="relative hidden bg-muted md:block">
                        <img
                            src="/placeholder.svg"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default RegisterPage