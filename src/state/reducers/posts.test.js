import { posts } from './posts'

describe('posts', () => {
  it('returns the initial state', () => {
    expect(posts(undefined, {})).toEqual({})
  })

  it('receives posts', () => {
    const postsList = [
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

    expect(
      posts([], {
        type: 'posts/REQUEST_SUCCESS',
        data: postsList
      })
    ).toEqual({
      loading: false,
      posts: postsList
    })
  })

  it('error receives posts', () => {
    const postsList = null

    expect(
      posts([], {
        type: 'posts/REQUEST_FAIL',
        data: postsList
      })
    ).toEqual({
      loading: false,
      posts: postsList
    })
  })
})
