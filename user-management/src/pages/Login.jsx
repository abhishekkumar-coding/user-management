

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("eve.holt@reqres.in")
    const [password, setPassword] = useState("cityslicka")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            const res = await axios.post("https://reqres.in/api/login", { email, password })
            localStorage.setItem("token", res.data.token)
            navigate("users")

        } catch (error) {
            setError(`invalid credential : ${error}`)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-lg shadow-xl w-96"
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>

                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="border rounded-md p-3 w-full mb-4 shadow-sm focus:ring-2 focus:ring-green-400"
                    required
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="border rounded-md p-3 w-full mb-6 shadow-sm focus:ring-2 focus:ring-green-400"
                    required
                />

                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md w-full font-semibold transition duration-200 shadow-md"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login