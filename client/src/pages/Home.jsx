import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import Loading from "../components/Loading.jsx";
import FormCardItem from "../components/FormCardItem.jsx";
import {getAllForms, getAllFormsBySearchWord} from "../store/features/FormSlice.js";

const Home = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch()

    const forms = useSelector(state=>state.forms.forms)
    const loading = useSelector(state=>state.forms.loading)

    const [searchWord, setSearchWord] = useState('')

    useEffect(() => {
        dispatch(getAllForms())
    }, []);

    const handleChangeSearchWord = (e)=>{
        setSearchWord(e.target.value)
    }
    const handleStartSearch = ()=>{
        dispatch(getAllFormsBySearchWord(searchWord))
    }

    if (loading) return <Loading/>

    return (
        <div>
            <h1 className='mainTitle'>{t('searchForms')}</h1>
            <div className='flex gap-4 w-[50%] mx-auto mb-8'>
                <input value={searchWord} onInput={handleChangeSearchWord} className='input' placeholder={t('searchWord')} type="text"/>
                <button onClick={handleStartSearch} className='button'>{t('search')}</button>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                {
                    forms.length === 0 &&
                    <h2 className='text-2xl'>{t('noForms')}</h2>
                }
                {
                    forms.map(form=>{
                        return(
                            <FormCardItem
                                key={form.id}
                                form={form}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;
