// components/Layout.js
"use client";
import { assets } from "@/Assets/assets";
import AdminHeader from "@/components/AdminComponents/AdminHeader";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { logout } from "@/lib/authService";

export default function Layout({ children }) {
    const { user, isAdmin, loading } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push("/"); // Redirect to homepage after logout
    };

    useEffect(() => {
        console.log("Layout Component - User:", user, "Is Admin:", isAdmin, "Loading:", loading);

        if (!loading) {
            if (!user) {
                console.log("Redirecting to login (not authenticated)...");
                router.push("/login");
            } else if (!isAdmin) {
                console.log("Redirecting to home (not admin)...");
                router.push("/");
            }
        }
    }, [user, isAdmin, loading]);

    if (loading) return <p>Loading...</p>;
    if (!isAdmin) return null;

    return (
        <>
            <AdminHeader />
            <div className="flex">
                <ToastContainer theme="dark" />
                <Sidebar />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[33px] px-10 border-b border-black">
                        <h3 className="font-semibold">Admin Panel</h3>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 font-semibold"
                        >
                            Logout
                        </button>
                        <Image src={assets.profile_icon} width={40} height={40} alt="Profile Icon" className="mb-10 rounded-full" />
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}
