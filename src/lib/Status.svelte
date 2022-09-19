<script>
  let status = '1'
</script>

{#if status === '1'}
  <h4 class="bg-titan text-white px-3 rounded-md py-0.5 inline-block">
    <span>Operational</span>
  </h4>
{:else}
  <h4 class="bg-titan text-white px-3 rounded-md py-0.5 inline-block">
    <span>We're working on it</span>
  </h4>
{/if}
