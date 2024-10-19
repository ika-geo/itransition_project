const checkSearchValues = (form, searchInputs)=>{
    if(searchInputs.title && !form.title.toLowerCase().includes(searchInputs.title.toLowerCase())){
        return false
    }
    if(searchInputs.tag!=="All" && !form.tags.includes(searchInputs.tag)){
        return false
    }
    if(searchInputs.author!=="All" && form.user.id!==parseInt(searchInputs.author)){
        return false
    }
    return true
}


export default checkSearchValues