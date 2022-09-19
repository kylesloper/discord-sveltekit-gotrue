<script>
  import Card from '$lib/overview/overview_card.svelte'
</script>

<section class=" border-not-black-400 border-b-[0.092rem] py-6">
  <h3>Overview</h3>
  <ul class="flex gap-8 pt-2 max-w-full overflow-x-scroll">
    <li>
      <Card header={1400} />
    </li>
    <li>
      <Card header={72} caption={'happy smiles this month'} />
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
  #gradient:first-of-type {
    margin-right: -3rem;
  }
</style>
