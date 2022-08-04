<script lang="ts">
  import MyTypewriter from '../components/MyTypewriter.svelte';
</script>

<div class="S1">
  <div class="Hero">
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
      I’m a full stack developer specializing in designing and building
      <span class="exceptional">exceptional</span> user experiences.
    </div>
    <div class="heroButton">View My Resume</div>
  </div>
</div>

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
      grid-template-rows: 0.01fr auto 0.2fr;
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
    font-size: $smallerFont;
    font-family: $titleFont;
    font-weight: $titleWeight;
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
    font-size: $smallFont;
    font-family: $textFont;
    font-weight: $textWeight;
    margin-top: 0.8em;
    letter-spacing: -1px;
    .exceptional {
      color: $pink;
    }
  }

  .heroButton {
    font-size: $smallerFont;
    font-family: $textFont;
    font-weight: $textWeight;
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
