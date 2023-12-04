import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"


const Layout = ({children}) => {
    return (
        <div className="flex">
            <div className="flex flex-1 p-[2rem] bg-softBg h-screen">
                <Sidebar/>
            </div>
            <div className="flex flex-[4] p-[2rem] w-auto flex-col">
                <Navbar/>
                {children}
            </div>
        </div>
        
    )
}

export default Layout