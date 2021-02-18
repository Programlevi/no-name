<script>
  export let name;
  export let actionName = name;
</script>

<section class="flex justify-center bg-gray-800 px-6 py-9">
  <div class="w-full max-w-lg">
    <div
      class="flex items-center justify-between pb-2.5 border-b border-gray-700"
    >
      <h3 class="text-xl">{name}</h3>
      <button class="flex items-center text-purple-400"
        ><svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <title>plus</title>
          <path
            d="M5 13h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"
          />
        </svg>
        <span class="ml-1 text-sm font-medium"> Add {actionName} </span>
      </button>
    </div>
    <slot />
  </div>
</section>
