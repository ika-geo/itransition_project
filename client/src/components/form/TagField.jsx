import React, {useEffect, useState} from 'react'
import {ReactTags} from 'react-tag-autocomplete'
import '../../styles/tagAUtocompleete.css'

const suggestions = [
    {value: 1, label: 'Quiz'},
    {value: 2, label: 'Person'},
    {value: 3, label: 'Other'}
]

const TagAutocomplete = ({form, setForm}) => {

    const [selected, setSelected] = useState([])

    useEffect(() => {
        setForm({...form, tags: selected.map(tag => tag.value)})
    }, [selected]);

    // useEffect(() => {
    //     setSelected(form.tags.map(tag => tag.value))
    // }, []);

    const onAdd =(newTag) => {
        setSelected([...selected, newTag])
    }
    const onDelete = (tagIndex) => {
        setSelected(selected.filter((_, i) => i !== tagIndex))
    }

    return (
        <div className="">
            <ReactTags
                selected={selected}
                suggestions={suggestions}
                onAdd={onAdd}
                onDelete={onDelete}
            />
        </div>
    )
}

export default TagAutocomplete
