import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Home from "./components/Home";
import JobListings from "./components/JobListings";
import WishList from "./components/Wishlist";
import JobDetails from "./components/JobDetails";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
