<script>
  import Counter from '$lib/Counter.svelte'
  import Overview from '$lib/overview/overview.svelte'
  import Recent from '$lib/roadmap/recent.svelte'
  import Support from '$lib/support/Support.svelte'
  import { authUserStore, confirm, logout, recover } from '$lib/Auth.js'
</script>

<svelte:head>
  <title>Mission Control — Home</title>
  <meta
    name="description"
    content="Titan Mission Control — Operate your Moonface project in one place"
  />
</svelte:head>
{#if $authUserStore}
  <h1>Logged in</h1>
{/if}
<Overview />
<Recent />
<Support />
