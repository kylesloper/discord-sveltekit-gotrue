<script>
  import RdItem from '$lib/roadmap/roadmap_item.svelte'
  import LinkIco from '$lib/icons/link.svelte'
</script>

<section class="mt-12">
  <div class="flex justify-between items-center">
    <h3>Recent Activity</h3>
    <div class="flex items-center gap-2">
      <h3 class="text-not-black-300 font-medium">Attention needed</h3>
      <div class="w-1.5 h-1.5 mt-1.5 bg-titan rounded-full" />
    </div>
  </div>
  <div class="flex flex-col lg:flex-row gap-x-12 gap-y-6 mt-4">
    <article
      class="bg-not-black-900 rounded-3xl border-not-black-600 border-[0.093rem] px-6 lg:px-8 py-5 w-full lg:w-[60%]"
    >
      <div class="flex justify-between items-center z-20">
        <h2 class="my-0">Roadmap</h2>
        <div class="flex items-center gap-2">
          <h3 class="text-not-black-300 my-0 font-medium">Live site</h3>
          <LinkIco fill={'#FF5B4F'} width={'.8rem'} />
        </div>
      </div>
      <div class="max-w-full flex justify-between h-[360px] relative mt-4">
        <div
          class="absolute bg-gradient-to-b from-not-black-900 to-transparent z-10 h-[20%] w-full top-0 pointer-events-none"
        />
        <div
          class="absolute bg-gradient-to-t from-not-black-900 to-transparent z-10 h-[50%] w-full bottom-0 pointer-events-none"
        />
        <div class="relative">
          <span class="absolute h-full w-0.5 bg-mf-neutral-800 ml-[1rem]" />
        </div>
        <ul class="flex flex-col gap-8 w-full overflow-y-scroll pt-6 pb-8">
          <RdItem
            heading={'Development: Cockpit'}
            caption={'We are configuring the Cockpit to your project. We’ll send the account info soon.'}
          />
          <RdItem
            isActive
            date={"3rd Sep '22"}
            heading={'Development: SEO optimization'}
            caption={'We are ensuring search engines love your site as much as you will.'}
          />
          <RdItem
            date={"21st Aug '22"}
            heading={'Development'}
            caption={'We are coding your site from the ground up. You can see our progress by clicking the "live site" button above.'}
          />
          <RdItem
            date={"20th Aug '22"}
            heading={'Design: Confirmation'}
            caption={'We are configuring the Cockpit to your project. We’ll send the account info soon.'}
          />
          <RdItem
            date={"1st Aug '22"}
            heading={'Design'}
            caption={"We have begun designing your site. We'll in touch shortly"}
          />
          <li class="flex relative pl-[0.33rem] items-center justify-center">
            <article class="ml-10 mt-4 pb-12 flex items-center gap-2">
              <p>We are setting up your project</p>
              <div class="w-1.5 h-1.5 bg-titan rounded-full" />
            </article>
          </li>
        </ul>
      </div>
    </article>
    <article class="grow flex flex-col">
      <h2>Tasks</h2>
      <h4 class="text-center self-center">Confirmed tasks</h4>
    </article>
  </div>
</section>

<style>
  *::-webkit-scrollbar {
    width: 0.2rem; /* width of the entire scrollbar */
  }
  *::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }
  *::-webkit-scrollbar-thumb {
    background-color: #111212; /* color of the scroll thumb */
    border-radius: 999px; /* roundness of the scroll thumb */
    background-clip: padding-box;
  }
</style>
