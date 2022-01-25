import apiUrl from '../apiConfig'
import axios from 'axios'

export const getUserProfile = (user) => {
  return axios({
    url: apiUrl + '/profile/',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

<<<<<<< HEAD
export const createProfile = (formData, user) => {
  console.log('token is', user.token)
  return axios({
    url: apiUrl + '/profile/create',
=======
export const createProfile = (user, formData) => {
  return axios({
    url: apiUrl + '/profile/',
>>>>>>> 0fa76f5 (merge conflict with chat.js)
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
<<<<<<< HEAD
    data: {
      userProfile: {
        username: formData
      }
    }
  })
}

export const updateProfile = (formData, user) => {
  return axios({
    url: apiUrl + `/profile/${user.userProfile[0].id}`,
=======
    data: formData
  })
}

export const updateProfile = (user, formData) => {
  return axios({
    url: apiUrl + `/profile/${user.userProfile}`,
>>>>>>> 0fa76f5 (merge conflict with chat.js)
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
<<<<<<< HEAD
    data: {
      userProfile: {
        username: formData
      }
    }
  })
}

export const deleteProfile = (id, user) => {
  return axios({
    url: apiUrl + `/profile/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
=======
    data: formData
>>>>>>> 0fa76f5 (merge conflict with chat.js)
  })
}
