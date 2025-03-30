import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserCard from "../component/UserCard";


function UserList() {

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
        } else {
            axios.get(`https://reqres.in/api/users?page=${page}`)
                .then(res => setUsers(res.data.data))
                .catch(err => console.error(err));
        }
    }, [page, navigate]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Users List</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>

            <div className="mt-6 flex justify-center items-center space-x-4">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-md transition duration-200 disabled:opacity-50"
                    disabled={page === 1}
                >
                    Prev
                </button>

                <span className="text-gray-700 font-semibold">Page {page}</span>

                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-md transition duration-200"
                >
                    Next
                </button>
            </div>
        </div>

    );
}

export default UserList