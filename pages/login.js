import { useState } from "react";
import { useRouter } from "next/router";
import { login } from "@/lib/authService";
import "@/app/globals.css";
import Header from "@/components/Header";
import { FaEnvelope, FaLock } from "react-icons/fa"; 
import { AiOutlineLoading3Quarters } from "react-icons/ai"; 
import Footer from "@/components/Footer";
import Spinner from "@/Assets/spinner";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); 
        try {
            await login(email, password);
            router.push("/admin");
        } catch (err) {
            setError("Incorrect email or password."); 
        } finally {
            setLoading(false);
        }
    };

    if (loading) 
        
        { return <Spinner/>;
            
         }

    return (
        <>
            <Header />
            <div className="flex items-center justify-center">
                <div className="p-8 rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full pl-10 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200"
                            />
                        </div>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full pl-10 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex items-center justify-center gap-2 py-3 bg-indigo-500 text-white rounded font-semibold hover:bg-indigo-600 transition duration-200 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                        >
                            {loading ? (
                                <>
                                    <AiOutlineLoading3Quarters className="animate-spin" /> Logging in...
                                </>
                            ) : (
                                "Login"
                            )}
                        </button>
                        {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}
