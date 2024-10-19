import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer } from 'react-toastify';

import Home from "./pages/Home.jsx";
import AdminPage from "./pages/Admin.jsx";
import Header from "./components/Header.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HandleUsersAdmin from "./pages/HandleUsersAdmin.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import 'react-toastify/dist/ReactToastify.css';
import Forms from "./pages/Forms.jsx";
import CreateForm from "./pages/CreateForm.jsx";
import FormPage from "./pages/FormPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import FormTemplates from "./pages/FormTemplates.jsx";
import EditForm from "./pages/EditForm.jsx";
import {useEffect} from "react";
import {getTagsAndTopics} from "./utils/tagsAndTopics.js";
import HandleFormsAdmin from "./pages/HandleFormsAdmin.jsx";


const adminRoutes = (
    <>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="admin/users" element={<HandleUsersAdmin />} />
        <Route path="/admin/manageForms" element={<HandleFormsAdmin/>} />
    </>
)

const commonRoutes = ()=>{
    return <>
        <Route index element={<Home />} />
        <Route path='/forms' element={<Forms/>}/>
        <Route path='/forms/:id' element={<FormPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </>
}

const authorizedRoutes = (userRole)=>(
    <Route path="/" element={<Header />}>
        <Route path="/myPage" element={<UserPage/>}/>
        <Route path="/createForm" element={<CreateForm />} />
        <Route path="/editForm" element={<EditForm/>}/>
        <Route path="/formTemplates" element={<FormTemplates />} />
        {userRole==='admin' && adminRoutes}
        {commonRoutes()}
        <Route path="*" element={<ErrorPage />} />
    </Route>
);

const unauthorizedRoutes =()=> (
        <Route path="/" element={<Header />}>
            {commonRoutes()}
            <Route path="*" element={<ErrorPage />} />
        </Route>
);

function App() {
    const user = useSelector(state => state.auth.user);
    const router = createBrowserRouter(
        createRoutesFromElements(user ? authorizedRoutes(user?.role) : unauthorizedRoutes())
    );

    const dispatch = useDispatch()
    useEffect(() => {
        getTagsAndTopics(dispatch)
    }, []);

    return (
        <div className='bg-bgColor min-h-screen break-words'>
            <RouterProvider
                router={router} />
            <ToastContainer />
        </div>
    );
}

export default App;
