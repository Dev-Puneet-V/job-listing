import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import JobListings from "./components/JobListings";
import WishList from "./components/Wishlist";
import JobDetails from "./components/JobDetails";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useSelector((state) => state.auth); // Check if user is authenticated

  // If the user is authenticated, render the element; otherwise, redirect to login
  return user ? element : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />

          {/* Private Routes */}
          <Route
            path="/jobs"
            element={<PrivateRoute element={<JobListings />} />}
          />
          <Route
            path="/jobs/:id"
            element={<PrivateRoute element={<JobDetails />} />}
          />
          <Route
            path="/wishlist"
            element={<PrivateRoute element={<WishList />} />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
