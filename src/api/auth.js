import axios from 'axios'

const CLIENT_ID = 'a9b9a9cdd993b995f360'

const REDIRECT_URI = 'https://andres9722.github.io/blog/'
const CLIENT_SECRET = '4c689dd1d7bc53aa6482bfb09b2edf6d0436cd29'
const ENDPOINT = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,gist&redirect_uri=${REDIRECT_URI}`

const TOKEN = 'https://blogauth0.herokuapp.com/authenticate'
const USER = 'https://api.github.com/user?access_token='

export default class AUTH {
  static requestUser (token) {
    return axios.get(`${USER}${token}`)
  }

  static requestToken (code) {
    console.log(code)
    return axios.get(`${TOKEN}/${code}`)
  }
}
