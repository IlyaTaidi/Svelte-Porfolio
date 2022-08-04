<script>
  import { fade } from 'svelte/transition';

  let cardState = 'ABOUT';

  function handler(event) {
    cardState = event.target.innerText;
    console.log(cardState);
  }
</script>

<div class="S2">
  <div class="S2Card">
    <div class="S2Buttons">
      <p on:click={(e) => handler(e)}>ABOUT</p>
      <p on:click={(e) => handler(e)}>EXPERIENCE</p>
      <p on:click={(e) => handler(e)}>CONTACT</p>
    </div>
    <div class="S2Main">
      <div class="S2Header">
        <img
          class="S2Avatar"
          src="https://imagedelivery.net/jwHiTPdD9NSTNd6dIleh1A/4a03b406-d9bf-44a7-d232-da5183b45a00/public"
          alt="avatar" />
        <h1 class="S2Name">Ilya Gnezdilov</h1>
        <h2 class="S2Job">Full Stack Designer</h2>
      </div>
      {#if cardState === 'ABOUT'}
        <div class="S2About" transition:fade>About</div>
      {/if}
      {#if cardState === 'EXPERIENCE'}
        <div class="S2Experience" transition:fade>Experience</div>
      {/if}
      {#if cardState === 'CONTACT'}
        <div class="S2Contact" transition:fade>Contact</div>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  @import '../variables.scss';
  .S2 {
    display: grid;
    height: 100vh;
    grid-template-columns: 0.5fr 2fr 0.5fr;
    grid-template-rows: 0.5fr 1.9fr 0.6fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      '. . .'
      '. S2Card .'
      '. . .';
  }

  .S2Card {
    display: grid;
    grid-template-columns: auto 1.8fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: 'S2Buttons S2Main';
    grid-area: S2Card;
    background: #ffffff8c;
  }

  .S2Buttons {
    grid-area: S2Buttons;
    display: flex;
    writing-mode: vertical-lr;
    cursor: pointer;
    flex-direction: row;
    transform: scale(-1);
    width: 2.5vw;
    p {
      border: 1px solid #000000;
      padding: 10px;
      flex: 1 1 auto;
    }
  }

  .S2Main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 1.6fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-area: S2Main;
    place-items: center;
  }

  .S2Header {
    grid-area: 1 / 1 / 2 / 2;
    display: grid;
    place-items: center;
  }

  .S2About {
    grid-area: 2 / 1 / 3 / 2;
  }

  .S2Experience {
    grid-area: 2 / 1 / 3 / 2;
  }

  .S2Contact {
    grid-area: 2 / 1 / 3 / 2;
  }
  .S2Avatar {
    width: 100px;
    height: 100px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    -o-object-position: center;
    object-position: center;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .S2Name {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    font-family: $titleFont;
  }

  .S2Job {
    font-family: $textFont;
    font-size: 11px;
    white-space: nowrap;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
  }
</style>
