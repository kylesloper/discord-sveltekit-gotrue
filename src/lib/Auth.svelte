<script>
  import { browser } from '$app/environment'
  import { session } from '$stores/auth.js'

  if (browser) {
    const localUser = JSON.parse(localStorage.getItem('gotrue.user'))

    if (localUser) {
      $session.user = localUser
    }
  }
</script>
