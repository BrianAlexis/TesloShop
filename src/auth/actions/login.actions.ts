import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interfaces/auth.response"

interface Props {
    email: string
    password: string
}

export const loginAction = async (
    { email, password }: Props
): Promise<AuthResponse> => {

    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
            email,
            password
        })

        return data

    } catch (error) {
        console.log({ error })
        throw error
    }

}