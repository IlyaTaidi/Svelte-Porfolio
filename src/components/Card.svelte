<script>
  import { slide } from 'svelte/transition';

  export let title;
  export let icon;
  export let content;

  let contentVisible = false;

  const handleEnter = () => {
    contentVisible = true;
  };

  const handleLeave = () => {
    contentVisible = false;
  };
</script>

<main>
  <div
    class={`container ${contentVisible ? 'container-visible' : ''}`}
    on:mouseenter={handleEnter}
    on:mouseleave={handleLeave}>
    <div class={`title ${contentVisible ? 'title-visible' : ''}`}>
      <div class={`svg ${contentVisible ? 'svg-visible' : ''}`}>
        {@html icon}
      </div>
      {title}
    </div>
    {#if contentVisible}
      <div transition:slide={{ duration: 500 }} class="content">
        <p>{content}</p>
      </div>
    {/if}
  </div>
</main>

<style lang="scss">
  @import '../variables.scss';
  .container {
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease-in-out;
    @media (min-aspect-ratio: 11/8) {
      transform: translateY(4vh);
    }
    @media (max-aspect-ratio: 11/8) {
      transform: translateY(1vh);
    }
  }
  .svg {
    color: black;
    transition: color 0.5s ease-in-out;
  }
  .svg-visible {
    color: white;
  }

  .container-visible {
    /*     transform: translateY(50px); */
  }

  .title {
    font-family: $titleFont;
    font-weight: $titleWeight;
    font-size: $servicesFont;
    background-color: rgb(231, 231, 231);
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
    @media (min-aspect-ratio: 11/8) {
      height: 20vh;
    }
    @media (max-aspect-ratio: 11/8) {
      height: 26vh;
    }
  }

  .title-visible {
    background-color: $purple;
    color: white;
  }

  .content {
    font-family: $textFont;
    padding: 20px 20px;
    background-color: rgb(29, 29, 29);
    color: white;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 200;
    line-height: 27px;
    @media (min-aspect-ratio: 11/8) {
      height: 25vh;
    }
    @media (max-aspect-ratio: 11/8) {
      height: fit-content;
    }
  }

  .svg {
    margin-bottom: 25px;
  }
</style>
