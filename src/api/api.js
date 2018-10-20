import axios from 'axios'

const ENDPOINT = 'https://api.github.com'

export default class API {
  static get (url) {
    return axios.get(`${ENDPOINT}/${url}`)
  }

  static post (post, token) {
    return axios({
      method: 'POST',
      url: 'https://api.github.com/gists',
      data: post,
      headers: {
        'Content-Type': 'application/json',
        authorization: `token ${token}`
      }
    })
  }
}
