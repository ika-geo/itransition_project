import React from 'react';

import {useSelector} from "react-redux";
import ReactQuill from "react-quill";
import {useTranslation} from "react-i18next";

import AddImage from "./AddImage.jsx";
import TagAutocomplete from "./TagField.jsx";
import {getTopicValueById} from "../../utils/tagsAndTopics.js";

import 'react-quill/dist/quill.snow.css';

const FormMainFields = ({form, setForm, image, setImage}) => {

    const {t} = useTranslation()
    const topics = useSelector(state=>state.forms.topics)

    const handleTitleChange = (e) => {
        setForm({...form, title: e.target.value});
    };

    const handleDescriptionChange = (e) => {
        setForm({...form, description: e});
    };

    const handleChangeTopic = (e) => {
        setForm({...form, topicId: e.target.value});
    }

    const handleDeleteImage = ()=>{
        setForm({...form, imageUrl: null})
    }

    if (!form) return

    return (
        <div>

            <div className='mb-4'>
                <p className='label'>{t('title')}</p>
                <input
                    className="input"
                    name="title"
                    value={form.title}
                    onChange={handleTitleChange}
                    type="text"
                />
            </div>

            <div className='mb-4'>
                <p className='label'>{t('description')}</p>
                <ReactQuill value={form.description} onChange={handleDescriptionChange} />
            </div>

            <div className='mb-4'>
                <p className='label'>{t('topic')}</p>
                <select
                    value={form.topicId}
                    className='input'
                    onChange={handleChangeTopic}>
                    {
                        topics.map(topic => (
                            <option key={topic.id} value={topic.id}>
                                {getTopicValueById(topics, topic.id, t)}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className='mb-4'>
                <p className='label'>{t('tags')}</p>
                <TagAutocomplete
                    form={form}
                    setForm={setForm}
                />
            </div>

            <div className='mb-4 w-[250px]'>
                <p className='label'>{t('image')}</p>
                {
                    form.imageUrl ?
                    <div>
                        <img
                            className='mb-2 max-h-[500px]'
                            src={form.imageUrl}
                            alt={form.title}
                        />
                        <button onClick={handleDeleteImage} className='buttonSlim bg-red-500'>{t('deleteImage')}</button>
                    </div> :
                        <AddImage
                            image={image}
                            setImage={setImage}
                        />
                }
            </div>
        </div>
    );
};

export default FormMainFields;