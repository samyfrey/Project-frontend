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

export const createProfile = (formData, user) => {
  console.log('token is', user.token)
  return axios({
    url: apiUrl + '/profile/create',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
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
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      userProfile: {
        username: formData
      }
    }
  })
}
