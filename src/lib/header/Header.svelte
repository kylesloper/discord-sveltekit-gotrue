<script>
  import { page } from '$app/stores'
  import logo from './svelte-logo.svg'
  import Arrow from '$lib/icons/arrow.svelte'
</script>

<header class="resp_cont pt-16 flex justify-between relative">
  <div>
    <img class="h-6 my-5" src="/titan-logo.svg" alt="titan logo" />
    <h1>Mission Control</h1>
    <nav data-sveltekit-prefetch class="my-4">
      <ul class="flex gap-x-4">
        <li class:active={$page.url.pathname === '/'}>
          <a class="chip" href="/">Home</a>
        </li>
        <li class:active={$page.url.pathname === '/about'}>
          <a class="chip" href="/about">Analytics</a>
        </li>
        <li class:active={$page.url.pathname === '/todos'}>
          <a class="chip" href="/todos">Gigs</a>
        </li>
        <li class:active={$page.url.pathname === '/about'}>
          <a class="chip" href="/about">Smiles</a>
        </li>
        <li class:active={$page.url.pathname === '/todos'}>
          <a class="chip" href="/support">Support</a>
        </li>
      </ul>
    </nav>
  </div>
  <div
    class="px-3.5 py-3.5 bg-titan flex flex-col justify-between items-start h-[190px] aspect-[4/3] font-semibold mt-12"
  >
    <h3 class="my-0">Enter Cockpit</h3>
    <Arrow height={'1rem'} />
  </div>
</header>
