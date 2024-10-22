const getDate = (date)=>{
    return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: 'numeric',
        })
}

export default getDate