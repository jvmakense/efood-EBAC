import { Outlet } from "react-router-dom";
import { useState } from "react";
import { GlobalStyles } from "../../globalStyles";
import Footer from "../Footer"
import Sidebar from "../Sidebar";
import Cart from "../Cart";

function Layout() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <GlobalStyles />
            <Sidebar open={open} setOpen={setOpen}/>
            <Cart  setOpen={setOpen}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;