// Save login repsonse

export const authenticate = (response, next) => {

    if (window !== "undefined") {

        sessionStorage.setItem("token", JSON.stringify(response.data.token))
        sessionStorage.setItem("user", JSON.stringify(response.data.name))

}
    next();
}
// acces token form sessions stroage

export const getToken = () => {

    if (window !== "undefined") {
        if (sessionStorage.getItem("token")) {

            return JSON.parse(sessionStorage.getItem("token"))
        }
    } else {
        return false;
    }
}
// acces users name from senssion storage
export const getUser = () => {

    if (window !== "undefined") {
        if (sessionStorage.getItem("user")) {

            return JSON.parse(sessionStorage.getItem("user"))
        }
    } else {
        return false;
    }
}



// remove token from session stroage
export const logout= (next) => {

    if (window !== "undefined") {

        sessionStorage.removeItem("token")
        sessionStorage.removeItem("user")

}
    next();
}