import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '43fb04c9-3a21-41db-b8e8-fdb1da6ba215'
    }
})


export const authAPI = {
    login(data:LoginParamsType) {
        instance.post <LoginParamsType,AxiosResponse<ResponseType>>('auth/login',data)
    }
}
//type
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type ResponseType = {
    resultCode: number
    messages: [],
    data: {
        userId: number
    }
}

