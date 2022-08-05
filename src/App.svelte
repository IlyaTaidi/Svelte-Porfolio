<script lang="ts">
  import { fade } from 'svelte/transition';
  import About from './pages/About.svelte';
  import Loading from './components/Loading.svelte';
  import Navbar from './components/Navbar.svelte';
  import Hero from './pages/Hero.svelte';
  import Services from './pages/Services.svelte';
  import { transitionOver } from './lib/pageLoad';

  let fadeIn;

  transitionOver.subscribe((data) => {
    fadeIn = data;
  });
</script>

<Navbar />
<Loading />
{#if fadeIn}
  <div transition:fade={{ duration: 1200, delay: 400 }}>
    <Hero />
    <About />
    <Services />
  </div>
{/if}
