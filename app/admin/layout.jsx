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
        router.push("/");
    };

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push("/login");
            } else if (!isAdmin) {
                router.push("/");
            }
        }
    }, [user, isAdmin, loading, router]); // Added router to the dependency array


    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="loader"></div>
        </div>
    );

    if (!isAdmin) return null;

    return (
        <>
            <AdminHeader />
            <div className="flex min-h-screen bg-gray-100">
                <ToastContainer theme="dark" />
                <Sidebar />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between bg-white shadow-sm py-4 px-6 border-b border-gray-200">
                        <h3 className="text-xl font-bold text-gray-800">Admin Panel</h3>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 font-semibold"
                            >
                                Logout
                            </button>
                            <Image
                                src={assets.profile_icon}
                                width={40}
                                height={40}
                                alt="Profile Icon"
                                className="rounded-full border border-gray-300 shadow-sm"
                            />
                        </div>
                    </div>
                    <main className="flex-1 p-8 bg-white shadow-sm rounded-lg m-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
