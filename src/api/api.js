import axios from 'axios'

const ENDPOINT = 'https://api.github.com'

export const getFromApi = url => axios.get(`${ENDPOINT}/${url}`)
