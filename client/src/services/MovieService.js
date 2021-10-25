
const baseURL = 'http://localhost:5000/api/users/'


export const getUsers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postNewUser = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type' : 'application/json' }
    })
    .then(res => res.json())
}

export const deleteUser = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateUser = (payload, id) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type' : 'application/json' }
    })
    .then(res => res.json())
}

export const getUserByName = (username) => {
    return fetch(baseURL + username, {
        method: 'GET',
    })
    .then(res => res.json())
}

// export const getUserbyPassword = (password) => {
//     return fetch(baseURL + password, {
//         method: 'GET',
//     })
//     .then(res => res.json())
// }
// Below functions not needed, to add and remove reviews we should be updating the users attached since each user will be assigned reviews - KS.

// export const getUserReview = () => {
//     return fetch(baseURL)
//         .then(res => res.json())
// }

// export const postUserReview = (payload) => {
//     return fetch(baseURL, {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type' : 'application/json' }
//     })
//     .then(res => res.json())
// }

// export const deleteUserReview = (id) => {
//     return fetch(baseURL + id, {
//         method: 'DELETE'
//     })
// }

// export const updateUserReview = (payload, id) => {
//     return fetch(baseURL + id, {
//         method: 'PUT',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type' : 'application/json' }
//     })
//     .then(res => res.json())
// }

