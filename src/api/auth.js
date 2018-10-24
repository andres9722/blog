import axios from 'axios'

const CLIENT_ID = 'a9b9a9cdd993b995f360'
const CLIENT_SECRET = '4c689dd1d7bc53aa6482bfb09b2edf6d0436cd29'
const REDIRECT_URI = 'http://localhost:3000/'
const ENDPOINT = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,gist&redirect_uri=${REDIRECT_URI}`
const TOKEN = 'https://github.com/login/oauth/access_token'
const USER = 'https://api.github.com/user?access_token='

export default class AUTH {
  static requestAuth () {
    return axios.get(`${ENDPOINT}`)
  }

  static requestUser (token) {
    return axios.get(`${USER}${token}`)
  }

  static requestToken (code) {
    return axios.post(
      `${TOKEN}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`
    )
  }
}
