import React, {useEffect, useState} from 'react';
import Loading from "../components/Loading.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteForm, getAllForms, getFormById} from "../store/features/FormSlice.js";
import FormCardItem from "../components/FormCardItem.jsx";
import {useNavigate} from "react-router-dom";
import AdminFormSearchBar from "../components/AdminFormSearchBar.jsx";
import * as sea from "node:sea";
import checkSearchValues from "../utils/checkSearchValues.js";

const defaultSearchInputs = {
    title: '',
    tag: 'All',
    author: 'All',
}

const HandleFormsAdmin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const forms = useSelector(state => state.forms.forms)
    const loading = useSelector(state => state.forms.loading)

    const [authors, setAuthors] = useState([])
    const [searchInputs, setSearchInputs] = useState(defaultSearchInputs)

    useEffect(() => {
        handleGetForms()
    }, []);

    useEffect(() => {
        let authors = forms.map(form => form.user);
        const uniqueAuthors = Array.from(
            new Map(authors.map(author => [author.id, author])).values()
        );
        setAuthors(uniqueAuthors);
    }, [forms]);

    const handleGetForms = () => {
        dispatch(getAllForms())
    }

    const handleNavigate = () => {
        navigate(`/editForm`)
    }

    const handleEdit = async (id) => {
        await dispatch(getFormById({id, handleNavigate}))
    }

    const handleDelete = (id) => {
        dispatch(deleteForm({id, handleAfterSucess: handleGetForms}))
    }


    console.log(searchInputs)

    if (loading) return <Loading/>
    if (!forms) return

    return (
        <div className='container mt-20'>
            <h1 className='text-3xl font-bold mb-8'>Manage Forms</h1>
            <AdminFormSearchBar
                searchInputs={searchInputs}
                setSearchInputs={setSearchInputs}
                authors={authors}
                defaultSearchInputs={defaultSearchInputs}
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {forms.map((form) => {
                    if(!checkSearchValues(form, searchInputs)) return
                        return <FormCardItem
                            key={form.id}
                            form={form}
                            editable={true}
                            adminRole={true}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    }
                )}
            </div>
        </div>
    );
};

export default HandleFormsAdmin;