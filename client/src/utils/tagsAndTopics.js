import {getTags, getTopics} from "../store/features/FormSlice.js";


export function getTagsAndTopics(dispatch){
    dispatch(getTags())
    dispatch(getTopics())
}

export function transformTags (tags){
    return tags.map(tag => ({
        value: tag.id,
        label: tag.label,
    }))
}

export function getTagLabelByValue (tags, value){
    if (tags.length){
        const tag = tags.find(tag => {
            return parseInt(tag.id) === parseInt(value)
        })
        return tag?.label || 'undefined'
    }
}

export function getTopicValueById (topics, id){
    if (topics.length){
        const topic = topics.find(topic => {
            return parseInt(topic.id) === parseInt(id)
        })
        return topic?.label || 'undefined'
    }
}