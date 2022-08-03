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
      <button class="heroButton">View My Resume</button>
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
      grid-template-rows: 0.2fr auto 0.2fr;
    }
  }

  .Hero {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    gap: 1vh 0px;
    align-content: center;
    grid-template-areas:
      '. nameText .'
      '. heroImage .'
      '. typewriter .'
      '. heroSubtext .'
      '. heroButton .';
    grid-area: Hero;
  }

  .nameText {
    grid-area: nameText;
    font-weight: 100;
    align-self: end;
    color: $blue;
    font-size: $smallFont;
    margin-bottom: 1.5em;
  }

  .heroImage {
    grid-area: heroImage;
  }

  .namedGradient {
    max-width: 91vw;
  }

  .typewriter {
    grid-area: typewriter;
    font-weight: 600;
    color: $lightBlue;
    font-size: $largeFont;
    @media (min-aspect-ratio: 11/8) and (max-aspect-ratio: 32/15) {
      display: flex;
    }
    @media (min-aspect-ratio: 32/15), (max-aspect-ratio: 11/8) {
      display: block;
      margin-top: 0.5em;
    }
  }

  .heroSubtext {
    grid-area: heroSubtext;
    color: $lightBlue;
    font-weight: 100;
    font-size: $smallFont;
    margin-top: 0.8em;
    .exceptional {
      color: $pink;
    }
  }

  .heroButton {
    font-size: $smallFont;
    grid-area: heroButton;
    height: 5vh;
    width: fit-content;
    border-style: solid;
    background: transparent;
    border-color: $purple;
    color: $purple;
    border-width: 1px;
    font-size: 1em;
    font-weight: 100;
    border-radius: 5px;
    cursor: pointer;
    padding: 1em 2em;
    align-items: center;
    display: flex;
    &:hover {
      background: #cc92fc1a;
    }
    &:active {
      background: #6438881a;
    }
    @media (min-aspect-ratio: 11/8) and (max-aspect-ratio: 32/15) {
      margin-top: 1.8em;
    }
    @media (min-aspect-ratio: 32/15), (max-aspect-ratio: 11/8) {
      margin-top: 2.5em;
    }
  }
</style>
