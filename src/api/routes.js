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

export const createProfile = (user, formData) => {
  return axios({
    url: apiUrl + '/profile/',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: formData
  })
}

export const updateProfile = (user, formData) => {
  return axios({
    url: apiUrl + `/profile/${user.userProfile}`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: formData
  })
}
