import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetails from "./components/UserDetails";
import Loader from "./components/Loader";
import avatar from "./assets/avatar.png";
import Pagination from "./components/Pagination";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage=7;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://602e7c2c4410730017c50b9d.mockapi.io/users?page=${currentPage}&limit=${usersPerPage}`
        );
        setUsers(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch users");
      }
      setLoading(false);
    };

    fetchUsers();
  }, [currentPage]);

  const handleImageError = (event) => {
    event.target.src = avatar;
  };

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500">{error}</div>;
  if (users.length === 0) return <div>No data to show</div>;

  return (
    <div className="flex bg-indigo-100">
      <div className="w-1/4 ml-8">
        {users.map((user, i) => (
          <div
            key={i}
            className="flex flex-col items-center pb-10 p-4 cursor-pointer hover:bg-slate-50 rounded"
            onClick={() => setSelectedUser(user)}
          >
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={user?.avatar}
              alt={user?.profile?.firstName}
              onError={handleImageError}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user?.profile?.firstName} {user?.profile?.lastName}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {user?.jobTitle}
            </span>
          </div>
        ))}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={Math.ceil(100 / usersPerPage)} 
        />
      </div>
      <div className="w-2/3 h-screen flex flex-col items-center justify-center ">
        {selectedUser ? (
          <UserDetails user={selectedUser} />
        ) : (
          <div className=" text-3xl font-bold text-center text">Select a user to see details</div>
        )}
      </div>
    </div>
  );
};

export default App;
