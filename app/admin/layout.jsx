import { assets } from "@/Assets/assets";
import AdminHeader from "@/components/AdminComponents/AdminHeader";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {

    return (
        <>
            <AdminHeader />

            <div className="flex">
                <ToastContainer theme="dark"/>
                <Sidebar />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[33px] px-12 border-b border-black">
                        <h3 className="font-semibold">Admin Panel </h3>
                        <Image src={assets.profile_icon} width={40} height={40} alt="" className="mb-10 rounded-full"/>
                    </div>

                    {children}

                </div>



            </div>


        </>



    )
}
