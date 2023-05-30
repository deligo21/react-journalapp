import { Navigate, Outlet } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";
import { useSelector } from "react-redux";

export const journalChildRoutesConfig = [   
    {
        index: true,
        element: <JournalPage/>,
    },
    {
        path: '/*',
        element: <Navigate to={'/'}/>,
    },
];

export const JournalRoutes = () => {

    const {status} = useSelector(state => state.auth);
    if (status === 'not-authenticated') {
        return <Navigate to='/auth/login'/>
    }
    return (
        <Outlet/>
    )
}
