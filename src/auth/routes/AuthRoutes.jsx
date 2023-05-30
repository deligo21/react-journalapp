import { Navigate, Outlet } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"
import { useSelector } from "react-redux";

export const authChildRoutesConfig = [
    {
        index: true,
        element: <Navigate to={'/auth/login'}/>,
    },
    {
        path: 'login',
        element: <LoginPage/>,
    },
    {
        path: 'register',
        element: <RegisterPage/>,
    },
]

export const AuthRoutes = () => {

    const {status} = useSelector(state => state.auth);
    if (status === 'authenticated') {
        return <Navigate to='/*'/>
    }

    return (
        <Outlet/>
    )
}
