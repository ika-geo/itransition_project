import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import AdminPage from "./pages/Admin.jsx";
import Header from "./components/Header.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Template from "./pages/Template.jsx";
import User from "./pages/User.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/template" element={<Template />} />
            <Route path="/User" element={<User />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App