<script>
  import { browser } from '$app/environment'
  /**
   * Whenever $session is updated,
   * the 'load' function runs again
   * thus, redirecting the user after login for example.
   */
  import { session } from '$stores/auth.js'

  const tokenName = '#confirmation_token'

  let confirming = false
  let email
  let error
  let loading = false
  let password
  let passwordConfirm
  let signUpRequested = false

  /**
   * Confirm new account, when a token is present
   */
  if (browser && location.hash && location.hash.startsWith(tokenName)) {
    const token = location.hash.slice(tokenName.length + 1)

    checkConfirmationToken(token)
  }

  async function checkConfirmationToken(token) {
    confirming = true
    error = undefined

    try {
      const data = await $session.confirm(token)

      console.log('check confirmation token', data)

      $session.user = data.user || null
    } catch (err) {
      console.log('Confirming token ERROR:', err)

      error = err
    }

    confirming = false
  }

  function handleSubmit() {
    loading = true

    $session
      .login(email, password, true)
      .then((response) => {
        $session.user = response

        loading = false
      })
      .catch((err) => {
        console.log('Login ERROR:', err)

        error = err

        loading = false
      })
  }

  async function handleSubmitSign() {
    error = undefined
    signUpRequested = false

    if (password !== passwordConfirm) {
      error = 'Password does not match.'

      return
    }

    $session
      .signup(email, password)
      .then(() => {
        signUpRequested = true
      })
      .catch((err) => {
        console.log('ERROR:', err)

        error = err
      })
  }
</script>

{#if confirming}
  <h2>Confirming user sign up</h2>

  <p>Please wait...</p>
{:else if loading}
  <h2>Checking credentials</h2>

  <p>Please wait...</p>
{:else if $session.user}
  <h2>User confirmed</h2>

  <p>{$session.user.email}</p>
{:else}
  <h2>Log in form</h2>

  {#if error}
    <p><strong>{error}</strong></p>
  {/if}

  <form on:submit|preventDefault={handleSubmit}>
    <label>
      <span>Email:</span>

      <input type="email" bind:value={email} />
    </label>

    <label>
      <span>Password:</span>

      <input type="password" bind:value={password} />
    </label>

    <button type="submit"> Log in </button>
  </form>

  <p>No account? <a href="/sign-up">Sign up</a>.</p>
{/if}

<h2>Sign up form</h2>

{#if error}
  <p><strong>{error}</strong></p>
{/if}

{#if signUpRequested}
  <p>Email confirmation sent.</p>

  <p><a href="/">Go to the homepage</a>.</p>
{:else}
  <form on:submit|preventDefault={handleSubmitSign}>
    <label>
      <span>Email:</span>

      <input type="email" bind:value={email} />
    </label>

    <label>
      <span>Password:</span>

      <input type="password" bind:value={password} />
    </label>

    <label>
      <span>Confirm password:</span>

      <input type="password" bind:value={passwordConfirm} />
    </label>

    <button type="submit"> Create account </button>
  </form>

  <p>Already have an account? <a href="/">Log in</a>.</p>
{/if}
