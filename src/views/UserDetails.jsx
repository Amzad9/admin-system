
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  console.log(userId)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_URL}/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUser();

    return () => {
      setUser(null);
    };
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" min-h-screen py-8">
      <div className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-4">User Details {userId}</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">ID:</label>
              <p className="text-lg font-semibold">{userId}</p>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">Name:</label>
              <p className="text-lg font-semibold">{user.username}</p>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">Email:</label>
              <p className="text-lg font-semibold">{user.email}</p>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">Role:</label>
              <p className="text-lg font-semibold">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default UserDetails;
