const storeToken = (value) => {
    localStorage.setItem("token", value)
}

const getToken = () =>{
    const token = localStorage.getItem('token')
    return token
}

const removeToken = (value) => {
    localStorage.removeItem(value)
}

export {storeToken, getToken, removeToken} 