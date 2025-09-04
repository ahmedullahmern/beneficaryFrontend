import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { AppRoutes } from "../constant/constant";
import axios from "axios";
import PageLoader from "../components/Loader/PageLoader";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            const token = Cookies.get('token')
            if (token) {
                getUser()
            } else {
                setLoading(false); // ⬅️ No token, stop loading
            }
        }
    }, [user])

    const getUser = () => {
        axios.get(AppRoutes.getMyInfo, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        }).then((res) => {
            console.log("resInGetUser==>", res)
            setUser(res?.data?.data)
        }).catch((err) => {
            console.log("errInGetUser==>", err)
        }).finally(() => {
            setLoading(false); 
        });
    }

    if (loading) {
        return <PageLoader center={true} />
    }


    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}