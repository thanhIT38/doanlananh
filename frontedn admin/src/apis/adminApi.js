import { instance } from "./axiosConfig"
export const loginUser = async (data) => {
    const res = await instance.post(`/user/login`, data)
    return res.data
}
