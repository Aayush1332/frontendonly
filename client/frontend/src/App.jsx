// import React, { useContext, useEffect } from "react";
// import "./App.css";
// import { Context } from "./main";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
// import { Toaster } from "react-hot-toast";
// import axios from "axios";
// import Navbar from "./components/Layout/Navbar";
// import Footer from "./components/Layout/Footer";
// import Home from "./components/Home/Home";
// import Jobs from "./components/Job/Jobs";
// import JobDetails from "./components/Job/JobDetails";
// import Application from "./components/Application/Application";
// import MyApplications from "./components/Application/MyApplications";
// import PostJob from "./components/Job/PostJob";
// import NotFound from "./components/NotFound/NotFound";
// import MyJobs from "./components/Job/MyJobs";

// const App = () => {
//   const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/v1/user/getuser",
//           {
//             withCredentials: true,
//           }
//         );
//         setUser(response.data.user);
//         setIsAuthorized(true);
//       } catch (error) {
//         console.error('Fetch User Error:', error.response?.data);
//         setIsAuthorized(false);
//       }
//     };
//     fetchUser();
//   }, [isAuthorized]);

//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/job/getall" element={<Jobs />} />
//           <Route path="/job/:id" element={<JobDetails />} />
//           <Route path="/application/:id" element={<Application />} />
//           <Route path="/applications/me" element={<MyApplications />} />
//           <Route path="/job/post" element={<PostJob />} />
//           <Route path="/job/me" element={<MyJobs />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <Footer />
//         <Toaster />
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;


import React, { useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplications";
import PostJob from "./components/Job/PostJob";
import NotFound from "./components/NotFound/NotFound";
import MyJobs from "./components/Job/MyJobs";

const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

const refreshAuthToken = async () => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/user/refresh",
      {},
      {
        withCredentials: true,
      }
    );
    return response.data.token;
  } catch (error) {
    console.error('Refresh Token Error:', error);
    throw new Error('Unable to refresh token');
  }
};

const fetchUser = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/v1/user/getuser",
      {
        withCredentials: true,
      }
    );
    setUser(response.data.user);
    setIsAuthorized(true);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      try {
        const newToken = await refreshAuthToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        await fetchUser();
      } catch (refreshError) {
        console.error('Refresh Token Error:', refreshError);
        setIsAuthorized(false);
      }
    } else {
      console.error('Fetch User Error:', error.response?.data);
      setIsAuthorized(false);
    }
  }
};

  useEffect(() => {
    fetchUser();
  }, [isAuthorized]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
