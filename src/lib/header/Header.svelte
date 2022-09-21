<script>
  import { page } from '$app/stores'
  import logo from './svelte-logo.svg'
  import Arrow from '$lib/icons/arrow.svelte'
  import { authUserStore } from '$stores/auth.js'
</script>

<header class="resp_cont pt-8 md:pt-16 flex-col justify-between relative mb-8">
  <img class="h-6 my-5" src="/titan-logo.svg" alt="titan logo" />
  <h1>Mission Control</h1>
  {#if $authUserStore}
    <nav
      data-sveltekit-prefetch
      class="my-4 overflow-x-scroll overflow-y-hidden"
    >
      <ul class="flex gap-x-4">
        <li class:active={$page.url.pathname === '/'}>
          <a class="chip" href="/">Home</a>
        </li>
        <li class:active={$page.url.pathname === '/about'}>
          <a class="chip clickable" href="/about">Analytics</a>
        </li>
        <li class:active={$page.url.pathname === '/todos'}>
          <a class="chip clickable" href="/todos">Gigs</a>
        </li>
        <li class:active={$page.url.pathname === '/about'}>
          <a class="chip clickable" href="/about">Smiles</a>
        </li>
        <li class:active={$page.url.pathname === '/todos'}>
          <a class="chip clickable" href="/support">Support</a>
        </li>
      </ul>
    </nav>
  {/if}
  <!-- <div
    class="px-3.5 py-3.5 bg-titan flex flex-col justify-between items-start h-[190px] aspect-[4/3] font-semibold mt-12"
  >
    <h3 class="my-0">Enter Cockpit</h3>
    <Arrow height={'1rem'} />
  </div> -->
</header>
