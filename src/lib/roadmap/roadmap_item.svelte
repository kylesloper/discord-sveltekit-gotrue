<script>
  export let heading = 'Heading undefined'
  export let caption = 'Caption undefined'
  export let date
  export let isActive = false

  let vCaption = caption.substring(0, 61)
  let longCaption = false
</script>

<li class="flex relative pl-[0.44rem]">
  {#if !isActive}
    <div
      class:mt-[1.85rem]={date}
      class="w-4 h-4 ml-[0.135rem] rounded-full absolute bg-mf-neutral-800 mt-4"
    />
  {:else}
    <div
      class:mt-[1.85rem]={date}
      class="w-5 h-5 mt-3 rounded-full absolute bg-titan"
    />
  {/if}
  <article class="ml-10 w-full">
    {#if date}
      <small class="text-not-black-300 text-center">{date}</small>
    {/if}
    <h3 class="my-0 font-medium">{heading}</h3>
    <p class="">
      {#if !longCaption}
        {vCaption}
        {#if caption.length > 69}<button
            id="readmore"
            on:click={() => (longCaption = !longCaption)}
            class="text-not-black-300">.. Show more</button
          >{/if}
      {:else}
        {caption}&nbsp;
        <button
          id="readmore"
          on:click={() => (longCaption = !longCaption)}
          class="text-not-black-300"
        >
          Show less</button
        >
      {/if}
    </p>
  </article>
</li>

<style>
  #readmore {
    cursor: pointer;
  }
</style>
