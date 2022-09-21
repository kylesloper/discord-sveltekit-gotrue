import { writable } from 'svelte/store'
import { redirect } from '@sveltejs/kit'
import { goTrueUser } from '../constants/gotrue.js'

export const authUserStore = writable(goTrueUser)

export function logout() {
  goTrueUser
    .logout()
    .then(() => {
      console.log(authUserStore)
      authUserStore.update((user) => undefined)
      throw redirect(307, '/')
    })
    .catch((e) => {
      alert(e.message)
    })
}

export async function updateUserSecuritySettings(email, password) {
  try {
    const updatedUser = await goTrueUser.update({
      email: email,
      password: password,
    })
    console.log(updatedUser)

    authUserStore.update(() => updatedUser)
  } catch (e) {
    alert(e.message)
  }
}

export async function updateUserCustomSettings(fullname) {
  try {
    const updatedUser = await goTrueUser.update({
      data: { fullname: fullname },
    })
    console.log(updatedUser)

    authUserStore.update(() => updatedUser)
  } catch (e) {
    alert(e.message)
  }
}

export async function signin(email, password) {
  try {
    await goTrueUser.login(email, password, true).then((user) => {
      authUserStore.update(() => user)
      window.location.assign('/')
    })
  } catch (e) {
    alert(e.message)
    throw e.message
  }
}

export function register(email, password) {
  return goTrueUser.signup(email, password)
}

export function requestPasswordRecovery(email) {
  return goTrueUser.requestPasswordRecovery(email)
}

export function confirm(token) {
  goTrueUser
    .confirm(token)
    .then(function (response) {
      alert(
        'Account confirmed! Welcome to the party! You can now login with your details',
        JSON.stringify({ response })
      )
    })
    .catch(function (e) {
      alert(e.message)
    })
}

export async function recover(token) {
  try {
    let existingUser = await goTrueUser.recover(token)

    alert(
      'Account recovered! You are now logged in. Please change your password immediately by updating your security settings.',
      JSON.stringify({ response })
    )
    console.log(`recovered account: ${existingUser}`)
    authUserStore.update(() => existingUser)
    window.location.assign('/settings')
  } catch (e) {
    console.log('something wrong with recovery')
    alert(e.message)
  }
}
