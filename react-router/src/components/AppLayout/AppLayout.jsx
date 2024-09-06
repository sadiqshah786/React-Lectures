import { Outlet } from "react-router"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout
