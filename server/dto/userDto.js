const userDto = (user)=>{
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    }
}

module.exports.userDto=userDto