<script>
  import { authUserStore } from '$stores/userStore'
  import { register } from '$stores/userStore'
  import { redirect } from '@sveltejs/kit'

  if ($authUserStore) {
    throw redirect(307, '/')
  }

  let password = ''
  let email = ''
  let showSuccessMessage = false
  let pendingApiCall = false

  export function submit(event) {
    pendingApiCall = true
    register(email, password)
      .then((newUser) => {
        showSuccessMessage = true
        pendingApiCall = false
      })
      .catch((e) => {
        pendingApiCall = false
        console.log(e)
        alert(e.message)
      })
  }
</script>

<h1>Register</h1>
<form on:submit|preventDefault={submit}>
  <input type="email" required placeholder="Email" bind:value={email} />
  <input
    type="password"
    required
    placeholder="Your password"
    bind:value={password}
  />

  <button>Register </button>
  {#if pendingApiCall}
    Loading..
  {/if}
</form>
{#if showSuccessMessage}
  <p>Please check your email to verify and then login</p>
{/if}
