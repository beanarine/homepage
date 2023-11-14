<script lang="ts">
  import "../app.css";
  import Footer from "$lib/footer.svelte";
  import Header from "$lib/header.svelte";
  import {variants, labels} from '@catppuccin/palette'
</script>

<div class="antialiased light:latte dark:macchiato text-text bg-base">
  <div class="flex flex-col min-h-screen">
    <header class="top-0 bg-crust shadow-md shadow-mantle text-text  drop-shadow-xl dark:text-yellow">
      <Header />
    </header>
    <main class="p-8 py-12 flex-grow shadow-lg drop-shadow-xl shadow-crust">
      <slot />
    </main>
    <footer class="px-8 py-4 dark:bg-mantle">
      <Footer />
    </footer>
  </div>
</div>
