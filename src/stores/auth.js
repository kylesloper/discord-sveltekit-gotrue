import GotTrue from 'gotrue-js'
import { readable } from 'svelte/store'

const url = 'https://bespoke-haupia-b4041c.netlify.app'
export const session = readable(
  new GotTrue({ setCookie: true, APIUrl: `${url}/.netlify/identity` })
)
