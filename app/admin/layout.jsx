import AdminHeader from "@/components/AdminComponents/AdminHeader";
import Sidebar from "@/components/AdminComponents/Sidebar";

export default function Layout({children}) {

    return (
        <>
        <AdminHeader/>
        <div className="flex">
            
            <Sidebar />

        </div>
            {children}
        
        </>
    )

}