import GotTrue from 'gotrue-js'
import { readable } from 'svelte/store'

export const session = readable(new GotTrue({ setCookie: true }))
