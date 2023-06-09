import { Navigate, Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { validateToken } from "./helpers/validateToken";
import { NewAccount } from "./pages/NewAccount";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UnProtectedRoute } from "./UnProtectedRoute";

export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route>
            <Route path="/*" element={<Navigate to="/login" replace />} />
            <Route element={<UnProtectedRoute />}>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/new-account" element={<NewAccount />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/home" element={<Home />} />
            </Route>
        </Route>

    )
)