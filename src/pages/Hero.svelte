<script lang="ts">
  import { fade } from 'svelte/transition';
  import MyTypewriter from '../components/MyTypewriter.svelte';
  import { transitionOver } from '../lib/pageLoad';

  let fadeIn;

  transitionOver.subscribe((data) => {
    fadeIn = data;
  });
</script>

{#if fadeIn}
  <div class="S1" transition:fade={{ duration: 2000, delay: 1000 }}>
    <div class="Hero">
      <p class="nameText">Hi, my name is</p>
      <div class="heroImage">
        <img
          src="https://imagedelivery.net/jwHiTPdD9NSTNd6dIleh1A/9f8be739-4c46-419e-ae6d-dd8782302000/public"
          alt="Ilya"
          class="namedGradient" />
      </div>
      <div class="typewriter">
        <p>I want to be your next</p>
        <MyTypewriter />
      </div>
      <div class="heroSubtext">
        I’m a full stack developer specializing in designing and building
        <span class="exceptional">exceptional</span> user experiences.
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  @import '../variables.scss';
  .S1 {
    display: grid;
    grid-auto-flow: row;
    grid-template-areas:
      '. . .'
      '. Hero .'
      '. . .';
    height: 100vh;
    @media (min-aspect-ratio: 11/8) and (max-aspect-ratio: 32/15) {
      grid-template-columns: 0.9fr 1.2fr 0.9fr;
      grid-template-rows: 0.9fr 1.2fr 0.9fr;
    }
    @media (min-aspect-ratio: 32/15), (max-aspect-ratio: 11/8) {
      grid-template-columns: auto;
      grid-template-rows: 1fr auto 1fr;
    }
  }

  .Hero {
    display: grid;
    grid-template-columns: 0.1fr 2.6fr 0.1fr;
    gap: 1vh 0px;
    grid-auto-rows: max-content;
    height: max-content;
    grid-template-areas:
      '. nameText .'
      '. heroImage .'
      '. typewriter .'
      '. heroSubtext .';
    grid-area: Hero;
  }

  .nameText {
    grid-area: nameText;
    font-weight: 100;
    align-self: end;
    color: $blue;
    font-size: $smallFont;
    margin-bottom: 0.8em;
  }

  .heroSubtext {
    margin-top: 0.8em;
    grid-area: heroSubtext;
    color: $darkBlue;
    font-weight: 100;
    font-size: $smallFont;
    .exceptional {
      color: $pink;
    }
  }

  .heroImage {
    grid-area: heroImage;
  }

  .typewriter {
    grid-area: typewriter;
    font-weight: 600;
    color: $darkBlue;
    font-size: $largeFont;
    @media (min-aspect-ratio: 11/8) and (max-aspect-ratio: 32/15) {
      display: flex;
    }
    @media (min-aspect-ratio: 32/15), (max-aspect-ratio: 11/8) {
      display: block;
    }
  }
  .namedGradient {
    max-width: 91vw;
  }
</style>
