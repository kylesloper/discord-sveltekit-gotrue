import GoTrue from 'gotrue-js'
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const GoTrue = import('gotrue-js')
const HOSTNAME = 'https://sveltekit-board.netlify.app'
const NETLIFY_FUNCTIONS_URL = HOSTNAME + '/.netlify/functions'
const NETLIFY_IDENTITY_URL = HOSTNAME + '/.netlify/identity'
const FUNC_DELETE_USER_URL = NETLIFY_FUNCTIONS_URL + '/delete-user'
const FUNC_GET_USERS_URL = NETLIFY_FUNCTIONS_URL + '/users' // const GoTrue = require('gotrue-js')

// export const auth = new GoTrue({
// 	APIUrl: NETLIFY_IDENTITY_URL,
// 	audience: '',
// 	setCookie: true
// });
console.log(GoTrue)

// GoTrue.APIUrl = NETLIFY_IDENTITY_URL
// console.log(GoTrue)
export const goTrueUser = GoTrue
