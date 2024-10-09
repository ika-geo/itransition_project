import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';

import Home from "./pages/Home.jsx";
import AdminPage from "./pages/Admin.jsx";
import Header from "./components/Header.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Template from "./pages/Template.jsx";
import User from "./pages/User.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import 'react-toastify/dist/ReactToastify.css';



const authorizedRoutes = (
    <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<ErrorPage />} />
    </Route>
);

const unauthorizedRoutes = (
    <>
        <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/template" element={<Template />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
    </>
);

function App() {
    const user = useSelector(state => state.user?.user);

    const router = createBrowserRouter(
        createRoutesFromElements(user ? authorizedRoutes : unauthorizedRoutes)
    );

    return (
        <div className='bg-bgColor min-h-screen'>
            <RouterProvider router={router} />
            <ToastContainer />
        </div>
    );
}

export default App;
