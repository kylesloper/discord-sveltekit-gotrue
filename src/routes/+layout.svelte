<script>
  import { onMount } from 'svelte'
  import Header from '$lib/header/Header.svelte'
  import Footer from '$lib/footer/Footer.svelte'
  import '../styles/base.css'
</script>

<header>
  <Header />
</header>

<main class="resp_cont">
  <slot />
</main>

<Footer />
