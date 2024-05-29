<script lang="ts">
  import { fly } from 'svelte/transition';
  import MyTypewriter from '../components/MyTypewriter.svelte';

  let y;
  const duration = 900;
  const delay = 50;
</script>

<svelte:window bind:scrollY={y} />
<div class="S1">
  {#if y <= 650}
    <div class="Hero" transition:fly={{ y: 100, duration, delay }}>
      <p class="nameText">Hi, my name is</p>
      <div class="heroImage">
        <img
          src="https://imagedelivery.net/jwHiTPdD9NSTNd6dIleh1A/9f8be739-4c46-419e-ae6d-dd8782302000/public"
          alt="Ilya"
          class="namedGradient" />
      </div>
      <div class="typewriter">
        <MyTypewriter />
      </div>
      <div class="heroSubtext">
        I'm a Full-Stack Developer specializing in designing and building
        <span class="exceptional">exceptional</span> digital experiences.
      </div>
      <a
        class="heroButton"
        href="https://drive.google.com/file/d/1Rc8yagwlOODm9zEmzb0KR20oJXP5HnyU/view?usp=sharing"
        target="_blank">View My Resume</a>
    </div>
    <div class="mouse" transition:fly={{ y: 100, duration, delay }} />
  {/if}
</div>

<style lang="scss">
  @import '../variables.scss';
  .S1 {
    display: grid;
    grid-auto-flow: row;
    grid-template-areas:
      '. . .'
      '. Hero .'
      '. mouse .';
    height: 100vh;
    @media (min-aspect-ratio: 11/8) and (max-aspect-ratio: 32/15) {
      grid-template-columns: 0.9fr 1.2fr 0.9fr;
      grid-template-rows: 0.9fr 1.2fr 0.9fr;
    }
    @media (min-aspect-ratio: 32/15), (max-aspect-ratio: 11/8) {
      grid-template-columns: auto;
      grid-template-rows: 0.3fr 2fr 0.7fr;
    }
  }
  .mouse {
    grid-area: mouse;
    overflow: hidden;
    width: 24px;
    height: 50px;
    border: 2px solid$lightBlue;
    border-radius: 30px;
    opacity: 0.2;
    display: flex;
    margin: auto;
  }

  .mouse:after {
    content: '';
    width: 4px;
    height: 4px;
    margin-left: 10px;
    background-color: $lightBlue;
    border-radius: 2px;
    animation: mouse-wheel 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }

  @keyframes mouse-wheel {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    70% {
      transform: translateY(15px);
      opacity: 0.5;
    }
    90% {
      opacity: 0;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
  .Hero {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    align-content: center;
    gap: 2.4vh 0px;
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
    align-self: end;
    color: $blue;
    font-size: $medium;
    font-family: $title;
    font-weight: $bolder;
    margin-bottom: -1vh;
  }

  .heroImage {
    grid-area: heroImage;
  }

  .namedGradient {
    max-width: 89vw;
  }

  .typewriter {
    grid-area: typewriter;
  }

  .heroSubtext {
    grid-area: heroSubtext;
    color: $lightBlue;
    font-size: $medium;
    font-family: $content;
    font-weight: $thiner;
    font-weight: 200;
    margin-top: 0.8em;
    letter-spacing: -1px;
    .exceptional {
      color: $pink;
    }
  }

  .heroButton {
    font-size: $medium;
    font-family: $content;
    font-weight: $thiner;
    text-decoration: none;
    grid-area: heroButton;
    width: fit-content;
    border-style: solid;
    background: transparent;
    border-color: #cc92fc;
    color: #cc92fc;
    border-width: 1px;
    border-radius: 5px;
    cursor: pointer;
    padding: 0.5em 1em;
    align-items: center;
    display: flex;
    margin-top: 1.5em;
    &:hover {
      background: #cc92fc1a;
    }
    &:active {
      background: #6438881a;
    }
  }
</style>
