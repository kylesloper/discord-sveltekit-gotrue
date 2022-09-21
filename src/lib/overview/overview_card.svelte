<script>
  import Arrow from '$lib/icons/arrow.svelte'
  import { onMount } from 'svelte'

  export let header
  export let caption

  let mouseX = 0
  let mouseY = 0

  let ballX = 0
  let ballY = 0

  let speed = 0.08

  function handleMouseMove(event) {
    const rect = event.target.getBoundingClientRect()
    mouseX = event.clientX - rect.left
    mouseY = event.clientY - rect.top
  }

  onMount(() => {
    let ball = document.querySelector('#gradient')

    function animate() {
      let distX = mouseX - ballX
      let distY = mouseY - ballY

      ballX = ballX + distX * speed
      ballY = ballY + distY * speed

      requestAnimationFrame(animate)
    }
    animate()
  })
</script>

<svelte:window />
<article
  on:mousemove={handleMouseMove}
  class="bg-neutral-800  px-4 py-6 aspect-[259/165] w-[300px] flex flex-col justify-between items-start overflow-hidden relative"
>
  <header class="z-20">
    <div class="my-0 text-4xl font-semibold">{header}</div>
    <h2 class="my-0 text-not-black-300">{caption}</h2>
  </header>
  <Arrow className={'arrow pointer-events-none'} fill={'#AEADAD'} />
  <div class="absolute left-0 top-0 h-full w-full pointer-events-none z-10">
    <div class="relative w-full h-full p-16">
      <img
        class="absolute right-0 bottom-0"
        style:left={`${ballX}px`}
        style:top={`${ballY}px`}
        id="gradient"
        src="/gradient.png"
        alt="gradient"
      />
    </div>
  </div>
</article>

<style>
  #gradient {
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
  }
</style>
