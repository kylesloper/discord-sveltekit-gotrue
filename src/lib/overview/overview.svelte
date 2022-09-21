<script>
  import Card from '$lib/overview/overview_card.svelte'
</script>

<section class=" border-not-black-400 border-b-[0.092rem] pb-6">
  <h3>Overview</h3>
  <ul
    class="flex gap-8 pt-2 max-w-full lg:overflow-visible overflow-x-scroll overflow-y-hidden"
  >
    <li
      id="firstCard"
      class="lg:hover:scale-[103%] duration-150 lg:focus:scale-[100%]"
    >
      <a class="lgCard" href="/support">
        <Card header={1400} caption={'visits this month'} /></a
      >
    </li>
    <li
      id="secCard"
      class="lg:hover:scale-[103%] duration-150 lg:focus:scale-[90%]"
    >
      <a class="lgCard" href="/support">
        <Card header={72} caption={'happy smiles this month'} />
      </a>
    </li>
  </ul>
</section>

<style>
  *::-webkit-scrollbar {
    width: 0.2rem; /* width of the entire scrollbar */
  }
  *::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }
  *::-webkit-scrollbar-thumb {
    background-color: #282828; /* color of the scroll thumb */
    border-radius: 999px; /* roundness of the scroll thumb */
    border: 0.4rem solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }
  .lgCard .arrow {
    transform: translateX(0);
    transition: 150ms ease-in-out;
  }
  .lgCard:hover .arrow {
    transform: translateX(0.3rem);
  }
</style>
