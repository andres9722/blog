import axios from 'axios'

const CLIENT_ID = 'a9b9a9cdd993b995f360'
const CLIENT_SECRET = '4c689dd1d7bc53aa6482bfb09b2edf6d0436cd29'

export const REDIRECT_URI = 'http://localhost:3000/'

export const ENDPOINT = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,gist&redirect_uri=${REDIRECT_URI}`

const TOKEN = 'https://github.com/login/oauth/access_token'

const USER = 'https://api.github.com/user?access_token='

export const requestAuth = () => axios.get(`${ENDPOINT}`)

export const requestToken = code =>
  axios.post(
    `${TOKEN}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`
  )

export const requestUser = token => axios.get(`${USER}${token}`)
