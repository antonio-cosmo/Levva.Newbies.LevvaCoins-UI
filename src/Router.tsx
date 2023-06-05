import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
//import { Login } from "./pages/Login";
//import { NewAccount } from "./pages/NewAccount";
// import { Home } from "./pages/Home";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { validateToken } from "./helpers/validateToken";
import { lazy } from "react";
const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const Login = lazy(() => import("./pages/Login").then(module => ({ default: module.Login })));
const NewAccount = lazy(() => import("./pages/NewAccount").then(module => ({ default: module.NewAccount })))
const isAuthenticated = validateToken();
export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route>
            <Route element={isAuthenticated ? <Navigate to="/home" /> : <Outlet />}>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" Component={() => <Login />} />
                <Route path="/new-account" Component={() => <NewAccount />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/home" Component={() => <Home />} />
            </Route>
        </Route>

    )
)