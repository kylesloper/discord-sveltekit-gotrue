<script>
  import Status from '$lib/Status.svelte'
</script>

<section class="mt-16 relative">
  <h3>Support</h3>
  <div class="flex flex-col sm:flex-row justify-between gap-x-12 gap-y-6">
    <article>
      <h2>We are always here to help</h2>
      <h4>
        <a class="text-titan" href="https://moonface.digital/support"
          >moonface.digital/support</a
        >
      </h4>
      <h4>
        <a class="text-titan" href="https://moonface.digital/support"
          >help@moonface.digital</a
        >
      </h4>
      <h3 class="mt-8 text-not-black-300 font-medium">
        Current service status
      </h3>
      <Status />
    </article>
    <article>
      <div class="flex items-center gap-2">
        <div class="w-1.5 h-1.5 mt-1.5 bg-titan rounded-full" />
        <h3 class="text-not-black-300 font-medium">Log a support ticket</h3>
      </div>
      <div
        class="bg-not-black-900 border-not-black-600 border-[0.093rem] rounded-lg px-4 py-4 md:aspect-[259/165] w-full md:w-[400px] max-w-full mt-2"
      >
        <form action="" class="flex flex-col">
          <div class="flex flex-col">
            <div class="flex flex-col">
              <h4 class="text-white mt-0">How severe is the issue?</h4>
              <ul class="flex gap-4">
                <li><div class="smlBtn">Not at all</div></li>
                <li><div class="smlBtn">Mild</div></li>
                <li><div class="smlBtn active">Critical</div></li>
              </ul>
            </div>
            <h4 class="font-normal text-sm">
              Not sure? <span class="text-titan">View some examples</span>
            </h4>
            <h4 class="font-normal text-sm my-0">
              By clicking "next", you agree that the current issue is <span
                class="text-titan">Business critical</span
              >. You agree to be billed a max. of £75 p/hr if the issue is
              billable
            </h4>
          </div>
          <div class="smlCtaBtn self-end">Next</div>
        </form>
      </div>
    </article>
  </div>
</section>
