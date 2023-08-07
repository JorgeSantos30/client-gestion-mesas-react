import React from "react"
import { Outlet } from "react-router-dom"
import MiniDrawer from "./MiniDrawer"
export const RouterLayout = () => {
    return(
        <>
        <MiniDrawer />
        <Outlet/>
        </>
    )
}