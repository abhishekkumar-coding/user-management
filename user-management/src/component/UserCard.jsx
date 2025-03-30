import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
    const navigate = useNavigate();

    return (
        <div className="border p-4 shadow-lg rounded-lg flex items-center space-x-4 bg-white transition-transform transform hover:scale-105 duration-300">
            <img
                src={user.avatar}
                alt={user.first_name}
                className="w-16 h-16 rounded-full border-2 border-gray-300 shadow-md"
            />

            <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">{user.first_name} {user.last_name}</h3>
                <p className="text-gray-500 text-sm">{user.email}</p>

                <div className="mt-2 space-x-2">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md shadow-sm transition duration-200"
                        onClick={() => navigate(`/edit/${user.id}`)}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md shadow-sm transition duration-200"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
