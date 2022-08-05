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
        <button>Read more </button>
      </div>
    {/if}
  </div>
</main>

<style lang="scss">
  @import '../variables.scss';
  .container {
    display: flex;
    flex-direction: column;
    transform: translateY(4vh);
    transition: transform 0.5s ease-in-out;
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
    height: 20vh;
    background-color: rgb(231, 231, 231);
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
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
    height: 25vh;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 200;
    line-height: 27px;
    p {
      margin-bottom: 2vh;
    }
  }

  .svg {
    margin-bottom: 25px;
  }

  button {
    border-radius: 5px;
    width: 50%;
    font-family: $textFont;
    font-size: $tinyerFont;
    font-weight: 200;
    height: fit-content;
    color: #ffffff;
    background-color: rgb(7 0 0 / 0%);
    border: 1px solid #ff9cae;
    box-shadow: 0px 2px 7px 0px rgb(0 0 0 / 22%);
    padding: 10px 0;
    margin: auto;
    margin-bottom: 0;

    &:hover {
      background: #cc92fc1a;
    }
    &:active {
      background: #6438881a;
    }
  }
</style>
