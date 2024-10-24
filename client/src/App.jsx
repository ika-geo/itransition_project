import {useEffect} from "react";

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
import Forms from "./pages/Forms.jsx";
import CreateForm from "./pages/CreateForm.jsx";
import FormPage from "./pages/FormPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import FormTemplates from "./pages/FormTemplates.jsx";
import EditForm from "./pages/EditForm.jsx";
import {getTagsAndTopics} from "./utils/tagsAndTopics.js";
import HandleFormsAdmin from "./pages/HandleFormsAdmin.jsx";
import FillForm from "./pages/FillForm.jsx";
import {setLocallySavedUser} from "./utils/localAuth.js";
import EditFillForm from "./pages/EditFillForm.jsx";
import HandleFilledFormsAdmin from "./pages/HandleFilledFormsAdmin.jsx";
import FilledFormPage from "./pages/FilledFormPage.jsx";
import HandleCommentsAdmin from "./pages/HandleCommentsAdmin.jsx";

import 'react-toastify/dist/ReactToastify.css';

const adminRoutes = (
    <>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="admin/users" element={<HandleUsersAdmin />} />
        <Route path="/admin/manageForms" element={<HandleFormsAdmin/>} />
        <Route path="/admin/manageFilledForms" element={<HandleFilledFormsAdmin/>} />
        <Route path="/admin/manageComments" element={<HandleCommentsAdmin/>} />
    </>
)

const commonRoutes = ()=>{
    return <>
        <Route index element={<Home />} />
        <Route path='/forms' element={<Forms/>}/>
        <Route path='/forms/:id' element={<FormPage/>}/>
        <Route path="*" element={<ErrorPage />} />
    </>
}

const authorizedRoutes = (userRole)=>(
    <Route path="/" element={<Header />}>
        <Route path="/myPage" element={<UserPage/>}/>
        <Route path="/createForm" element={<CreateForm />} />
        <Route path="/editForm" element={<EditForm/>}/>
        <Route path="/formTemplates" element={<FormTemplates />} />
        <Route path="/fillForm/:id" element={<FillForm />} />
        <Route path="/editFilledForm" element={<EditFillForm />} />
        <Route path="/filledFormPage" element={<FilledFormPage/>} />
        {userRole==='admin' && adminRoutes}
        {commonRoutes()}
    </Route>
);

const unauthorizedRoutes =()=> (
        <Route path="/" element={<Header />}>
            {commonRoutes()}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>
);

function App() {

    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user);

    const router = createBrowserRouter(
        createRoutesFromElements(user ? authorizedRoutes(user?.role) : unauthorizedRoutes())
    );

    useEffect(() => {
        getTagsAndTopics(dispatch)
        setLocallySavedUser(dispatch)
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
