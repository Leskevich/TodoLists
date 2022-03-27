import axios, {AxiosResponse} from "axios";
import {ResponseType} from "./todolists-api";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '1ae8173a-99f7-4535-9dfc-38c3e6ba3ed8'
    }
})


export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post <LoginParamsType, AxiosResponse<ResponseType<{ userId: number }>>>('auth/login', data)
    },
    me() {
        return instance.get<ResponseType, AxiosResponse<ResponseType<MeResponseType>>>("/auth/me")
    },
    logout(){
        return instance.delete<ResponseType>('auth/login')
    }

}
//type

export type MeResponseType = {
    id: number,
    email: string,
    login: string
}
export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}



