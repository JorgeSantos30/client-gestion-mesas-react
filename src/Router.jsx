import React from "react"
import { Route, Routes } from "react-router-dom"
import { RouterLayout } from "./common/RouterLayout"
import DashboarPage from "./Screens/dashboard"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />} />
            <Route path="/" element={<DashboarPage />} />
        </Routes>
    )
}