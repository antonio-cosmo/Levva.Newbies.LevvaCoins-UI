import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { NewAccount } from "./pages/NewAccount";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-account" element={<NewAccount />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}