import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { validateToken } from "./helpers/validateToken";
import { NewAccount } from "./pages/NewAccount";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
const isAuthenticated = validateToken();
export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route>
            <Route element={isAuthenticated ? <Navigate to="/home" /> : <Outlet />}>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/new-account" element={<NewAccount />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/home" element={<Home />} />
            </Route>
        </Route>

    )
)