import type { User } from "@/interfaces/use.interface"

export interface AuthResponse {
    user: User
    token: string
}