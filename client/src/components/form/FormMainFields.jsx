import React from 'react';
import AddImage from "./AddImage.jsx";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import TagAutocomplete from "./TagField.jsx";
import {useSelector} from "react-redux";
import {getTopicValueById} from "../../utils/tagsAndTopics.js";

const FormMainFields = ({form, setForm, image, setImage}) => {

    const topics = useSelector(state=>state.forms.topics)

    const handleTitleChange = (e) => {
        setForm({...form, title: e.target.value});
    };

    const handleDescriptionChange = (e) => {
        setForm({...form, description: e});
    };

    const handleChangeTopic = (e) => {
        setForm({...form, topic: e.target.value});
    }

    const handleDeleteImage = ()=>{
        setForm({...form, imageUrl: null})
    }

    console.log(topics)

    if (!form) return

    return (
        <div>

            <div className='mb-4'>
                <p className='label'>Title</p>
                <input
                    className="input"
                    name="title"
                    value={form.title}
                    onChange={handleTitleChange}
                    type="text"
                />
            </div>

            <div className='mb-4'>
                <p className='label'>Description</p>
                <ReactQuill value={form.description} onChange={handleDescriptionChange} />
            </div>

            <div className='mb-4'>
                <p className='label'>Topic</p>
                <select
                    value={form.topic.label}
                    className='input'
                    onChange={handleChangeTopic}>
                    {
                        topics.map(topic => (
                            <option key={topic.id} value={topic.id}>
                                {getTopicValueById(topics, topic.id)}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className='mb-4'>
                <p className='label'>Tags</p>
                <TagAutocomplete
                    form={form}
                    setForm={setForm}
                />
            </div>

            <div className='mb-4 w-[250px]'>
                <p className='label'>Image</p>
                {
                    form.imageUrl ?
                    <div>
                        <img
                            className='mb-2 max-h-[500px]'
                            src={form.imageUrl}
                            alt={form.title}
                        />
                        <button onClick={handleDeleteImage} className='buttonSlim bg-red-500'>Delete image</button>
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