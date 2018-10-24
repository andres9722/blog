import {
  onLogout,
  getData,
  showModal,
  createPost,
  updatePost
} from './actionCreators'
import configureStore from 'redux-mock-store'
import moxios from 'moxios'
import thunk from 'redux-thunk'
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  SHOW_MODAL,
  LOGOUT,
  CREATE_POST_REQUEST,
  CREATE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS
} from './actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('getPosts actions', () => {
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  const data = [
    {
      url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2',
      forks_url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2/forks',
      commits_url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2/commits',
      id: '8222d6db3f1ea785d06f06c92b219bf2',
      node_id: 'MDQ6R2lzdDgyMjJkNmRiM2YxZWE3ODVkMDZmMDZjOTJiMjE5YmYy',
      comments: 0,
      comments_url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2/comments',
      created_at: '2018-10-21T20:22:06Z',
      description: 'Juan',
      files: {
        'post.md': {
          filename: 'post.md',
          language: 'Markdown',
          raw_url: 'https://gist.githubusercontent.com/andres9722/8222d6db3f1ea785d06f06c92b219bf2/raw/fc0fa1a52a67aa553a4134023741c754cad236ef/post.md',
          size: 4,
          type: 'text/plain'
        }
      },
      owner: {
        login: 'andres9722',
        id: 29875285,
        node_id: 'MDQ6VXNlcjI5ODc1Mjg1',
        avatar_url: 'https://avatars3.githubusercontent.com/u/29875285?v=4',
        gravatar_id: '',
        html_url: 'https://github.com/andres9722',
        organizations_url: 'https://api.github.com/users/andres9722/orgs',
        received_events_url: 'https://api.github.com/users/andres9722/received_events',
        repos_url: 'https://api.github.com/users/andres9722/repos',
        site_admin: false,
        starred_url: 'https://api.github.com/users/andres9722/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/andres9722/subscriptions',
        type: 'User',
        url: 'https://api.github.com/users/andres9722'
      },
      public: true,
      truncated: false,
      updated_at: '2018-10-21T20:22:06Z',
      user: null
    },
    {
      url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2',
      forks_url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2/forks',
      commits_url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2/commits',
      id: '8222d6db3f1ea785d06f06c92b219bf2',
      node_id: 'MDQ6R2lzdDgyMjJkNmRiM2YxZWE3ODVkMDZmMDZjOTJiMjE5YmYy',
      comments: 0,
      comments_url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2/comments',
      created_at: '2018-10-21T20:22:06Z',
      description: 'Juan',
      files: {
        'post.md': {
          filename: 'post.md',
          language: 'Markdown',
          raw_url: 'https://gist.githubusercontent.com/andres9722/8222d6db3f1ea785d06f06c92b219bf2/raw/fc0fa1a52a67aa553a4134023741c754cad236ef/post.md',
          size: 4,
          type: 'text/plain'
        }
      },
      owner: {
        login: 'andres9722',
        id: 29875285,
        node_id: 'MDQ6VXNlcjI5ODc1Mjg1',
        avatar_url: 'https://avatars3.githubusercontent.com/u/29875285?v=4',
        gravatar_id: '',
        html_url: 'https://github.com/andres9722',
        organizations_url: 'https://api.github.com/users/andres9722/orgs',
        received_events_url: 'https://api.github.com/users/andres9722/received_events',
        repos_url: 'https://api.github.com/users/andres9722/repos',
        site_admin: false,
        starred_url: 'https://api.github.com/users/andres9722/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/andres9722/subscriptions',
        type: 'User',
        url: 'https://api.github.com/users/andres9722'
      },
      public: true,
      truncated: false,
      updated_at: '2018-10-21T20:22:06Z',
      user: null
    }
  ]

  it('creates posts/REQUEST_SUCCESS after successfuly fetching postse', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: data
      })
    })

    const expectedActions = [
      { type: GET_DATA_REQUEST },
      { type: GET_DATA_SUCCESS, data }
    ]

    const store = mockStore({ posts: {} })

    return store.dispatch(getData('andres9722')).then(() => {
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions).toEqual(expectedActions)
      expect(actions[1].data.length).toBe(2)
    })
  })

  it('creates posts/REQUEST_FAIL after error fetching postse', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 404,
        response: []
      })
    })

    const expectedActions = [
      { type: GET_DATA_REQUEST },
      { type: GET_DATA_FAIL, error: 'Request failed with status code 404' }
    ]

    const store = mockStore({ posts: {} })

    store.dispatch(getData('andres9722')).then(() => {
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions).toEqual(expectedActions)
    })
  })

  it('creates post/REQUEST_SUCCESS after fail create postse', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        data
      })
    })

    const expectedActions = [
      { type: CREATE_POST_REQUEST },
      { type: CREATE_POST_FAIL, error: 'Request failed with status code 404' }
    ]

    const store = mockStore()

    return store.dispatch(createPost({}, null)).then(() => {
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions).toEqual(expectedActions)
    })
  })

  it('creates post-update/SUCCESS after success updating posts', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200
      })
    })

    const expectedActions = [
      { type: UPDATE_POST_REQUEST },
      { type: UPDATE_POST_SUCCESS }
    ]

    const store = mockStore()

    const post = {
      url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2',
      forks_url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2/forks',
      commits_url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2/commits',
      id: '8222d6db3f1ea785d06f06c92b219bf2',
      node_id: 'MDQ6R2lzdDgyMjJkNmRiM2YxZWE3ODVkMDZmMDZjOTJiMjE5YmYy',
      comments: 0,
      comments_url: 'https://api.github.com/gists/8222d6db3f1ea785d06f06c92b219bf2/comments',
      created_at: '2018-10-21T20:22:06Z',
      description: 'Juan',
      files: {
        'post.md': {
          filename: 'post.md',
          language: 'Markdown',
          raw_url: 'https://gist.githubusercontent.com/andres9722/8222d6db3f1ea785d06f06c92b219bf2/raw/fc0fa1a52a67aa553a4134023741c754cad236ef/post.md',
          size: 4,
          type: 'text/plain'
        }
      },
      owner: {
        login: 'andres9722',
        id: 29875285,
        node_id: 'MDQ6VXNlcjI5ODc1Mjg1',
        avatar_url: 'https://avatars3.githubusercontent.com/u/29875285?v=4',
        gravatar_id: '',
        html_url: 'https://github.com/andres9722',
        organizations_url: 'https://api.github.com/users/andres9722/orgs',
        received_events_url: 'https://api.github.com/users/andres9722/received_events',
        repos_url: 'https://api.github.com/users/andres9722/repos',
        site_admin: false,
        starred_url: 'https://api.github.com/users/andres9722/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/andres9722/subscriptions',
        type: 'User',
        url: 'https://api.github.com/users/andres9722'
      },
      public: true,
      truncated: false,
      updated_at: '2018-10-21T20:22:06Z',
      user: null
    }

    return store.dispatch(updatePost('1515', post, '4s4s4s4')).then(() => {
      const actions = store.getActions()
      expect(actions.length).toBe(2)
      expect(actions).toEqual(expectedActions)
    })
  })
})

it('logout', () => {
  const store = mockStore()

  store.dispatch(onLogout())
  const actions = store.getActions()
  expect(actions.length).toBe(1)
  expect(actions[0].type).toBe(LOGOUT)
})

it('show modal', () => {
  const store = mockStore()

  store.dispatch(showModal())
  const actions = store.getActions()
  expect(actions.length).toBe(1)
  expect(actions[0].type).toBe(SHOW_MODAL)
})
