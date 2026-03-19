import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interfaces/auth.response"

interface Props {
    email: string
    password: string
    fullName: string
}

export const registerAction = async (
    { email, password, fullName }: Props
): Promise<AuthResponse> => {

    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
            email,
            password,
            fullName
        })
        return data

    } catch (error) {
        console.log({ error })
        throw error
    }

}