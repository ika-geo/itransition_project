import React, {useEffect, useState} from 'react'
import {ReactTags} from 'react-tag-autocomplete'
import '../../styles/tagAUtocompleete.css'
import {useSelector} from "react-redux";
import {getTagLabelByValue, transformTags} from "../../utils/tagsAndTopics.js";



const TagAutocomplete = ({ form, setForm }) => {
    const tags = useSelector(state => state.forms.tags)
    const suggestions = transformTags(tags)
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        const newSelected = form.tags.map(tag => ({
            value: parseInt(tag),
            label: getTagLabelByValue(tags, tag)
        }));
        setSelected(newSelected);
    }, []);

    useEffect(() => {
        let tags = selected.map(tag => tag.value)
        setForm({ ...form, tags });
    }, [selected]);

    const onAdd =(newTag) => {
        setSelected([...selected, newTag])
    }

    const onDelete = (tagIndex) => {
        setSelected(selected.filter((_, i) => i !== tagIndex));
    };

    return (
        <div className="">
            <ReactTags
                selected={selected}
                suggestions={suggestions}
                onAdd={onAdd}
                onDelete={onDelete}
            />
        </div>
    );
};



export default TagAutocomplete
