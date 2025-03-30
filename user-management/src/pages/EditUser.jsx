import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`).then(res => setUser(res.data.data));
    }, [id]);

    const handleUpdate = async () => {
        await axios.put(`https://reqres.in/api/users/${id}`, user);
        navigate("/users");
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit User</h2>

            <input
                type="text"
                value={user.first_name}
                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                className="border p-2 w-64 mb-3 rounded-md shadow-sm focus:ring focus:ring-green-300"
            />

            <input
                type="text"
                value={user.last_name}
                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                className="border p-2 w-64 mb-3 rounded-md shadow-sm focus:ring focus:ring-green-300"
            />
            <div className="mt-4 space-x-3">
                <button
                    onClick={handleUpdate}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition duration-200"
                >
                    Update
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow-md transition duration-200"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditUser;
