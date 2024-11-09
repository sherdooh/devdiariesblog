// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import { login } from "@/lib/authService";
import "@/app/globals.css";
import Header from "@/components/Header";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log("Attempting login with email:", email);
            await login(email, password);
            console.log("Login successful, redirecting...");
            router.push("/admin");
        } catch (err) {
            console.error("Login error:", err.message);
            setError(err.message); // Display the specific error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <>    <Header />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-dark-400">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 bg-indigo-500 text-white rounded font-semibold hover:bg-indigo-600 transition duration-200 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                        {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
                    </form>
                </div>
            </div>
        </>

    );
}
