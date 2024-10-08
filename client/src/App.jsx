import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import AdminPage from "./pages/Admin.jsx";
import Header from "./components/Header.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Template from "./pages/Template.jsx";
import User from "./pages/User.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from "react-redux";

const authorizedRoute = () => {
    return (
        <Route path="/" element={<Header/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/template" element={<Template/>}/>
            <Route path="/User" element={<User/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Route>
    )
}

const unauthorizedRoute = () => {
    return <>
        <Route path="/" element={<Header/>}>
            <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </>
}




function App() {
    const user = useSelector(state=>state.user?.user)

    const router = createBrowserRouter(
        createRoutesFromElements(
            user ? authorizedRoute() : unauthorizedRoute()
        )
    );
    return (
        <div className='bg-bgColor min-h-screen'>
            <RouterProvider router={router}/>
            <ToastContainer />
        </div>

    )
}

export default App