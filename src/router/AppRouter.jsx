import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthRoutes, authChildRoutesConfig } from "../auth/routes/AuthRoutes";
import { JournalRoutes, journalChildRoutesConfig } from "../journal/routes/JournalRoutes";
import { CheckingAuth, ErrorPage } from "../ui";
import { useCheckAuth } from "../hooks";

export const routesConfig = createBrowserRouter([
    {
        path: 'auth/*',
        element: <AuthRoutes/>,
        errorElement: <ErrorPage/>,
        children: authChildRoutesConfig,
    },
    {
        path: '/',
        element: <JournalRoutes/>,
        errorElement: <ErrorPage/>,
        children: journalChildRoutesConfig,
    },
    
]);

export const AppRouter = () => {

    const status = useCheckAuth();    

    if (status === 'checking') {
        return <CheckingAuth/>
    }

    return <RouterProvider router={routesConfig}/>
};
