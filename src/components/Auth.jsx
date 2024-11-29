import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/authSlice"; // Import actions

const Auth = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth); // Get state from Redux store

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle login action
  const handleLogin = () => {
    // Simulate a login process (You can replace it with an actual API call)
    const mockUser = { username: userData.username };
    const mockToken = "1234567890abcdef"; // Simulated token
    dispatch(login({ user: mockUser, token: mockToken }));
  };

  // Handle logout action
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Authentication
        </h1>

        {/* Display User Info if logged in */}
        {user ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-600">
              Welcome, {user.username}
            </h3>
            <p className="text-gray-500 mb-4">Your token: {token}</p>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          // Display login form if not logged in
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={userData.username}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
