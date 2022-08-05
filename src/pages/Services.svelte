<script>
  import { fade } from 'svelte/transition';
  import chipSVG from '../assets/chip';
  import mobileSVG from '../assets/mobile';
  import webSVG from '../assets/web';
  import Card from '../components/Card.svelte';

  let y;
</script>

<svelte:window bind:scrollY={y} />
<div class="S3Container">
  {#if y >= 1130}
    <div
      class="ServicesHeader"
      transition:fade={{ duration: 1100, delay: 300 }}>
      <p class="ServiceHeaderText">Services I Provide</p>
    </div>
    <div class="S3" transition:fade={{ duration: 1100, delay: 300 }}>
      <div class="Web">
        <Card
          title="Web Application Development"
          icon={webSVG}
          content="Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design user interface design authoring, including standardised code and proprietary software user experience design and search engine" />
      </div>
      <div class="Mobile">
        <Card
          title="Mobile Application Development"
          icon={mobileSVG}
          content="We provide a range of mobile application development services including custom mobile development on Android platforms, building cross-platform apps, designing user experience and integrating novel mobile interfaces such as chat and voice." />
      </div>
      <div class="Backend">
        <Card
          title="Backend Development"
          icon={chipSVG}
          content="Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience." />
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  @import '../variables.scss';

  .S3Container {
    display: grid;
    height: 100vh;
    @media (min-aspect-ratio: 11/8) {
      grid-template-columns: 0.2fr 2.6fr 0.2fr;
      grid-template-rows: 0.3fr 0.3fr 1.5fr 0.5fr;
      gap: 0px 8vw;
      grid-template-areas:
        '. . .'
        '. ServicesHeader .'
        '. S3 .'
        '. . .';
    }
    @media (max-aspect-ratio: 11/8) {
      grid-template-columns: 0.1fr 2.6fr 0.1fr;
      grid-template-rows: 0.5fr 0.6fr 2.6fr 0.3fr;
      gap: 0px 0px;
      grid-template-areas:
        '. . .'
        '. ServicesHeader .'
        '. S3 .'
        '. . .';
    }
  }

  .ServicesHeader {
    display: grid;
    grid-area: ServicesHeader;
    border-bottom: 1px solid $purple;
    @media (min-aspect-ratio: 11/8) {
      grid-template-columns: 0.1fr repeat(2, 1.3fr) 1.4fr;
      grid-template-rows: 1fr;
      gap: 0px 0px;
      grid-template-areas: '. ServiceHeaderText ServiceHeaderText ServiceHeaderText';
    }
    @media (max-aspect-ratio: 11/8) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      gap: 0px 0px;
      grid-template-areas: 'ServiceHeaderText';
      grid-area: ServicesHeader;
    }
  }

  .ServiceHeaderText {
    grid-area: ServiceHeaderText;
    color: $blue;
    font-size: $smallerFont;
    font-family: $titleFont;
    font-weight: $titleWeight;
    display: flex;
    align-items: end;
    margin-left: 0.5vw;
  }

  .S3 {
    display: grid;
    grid-area: S3;
    @media (min-aspect-ratio: 11/8) {
      border-left: 1px solid $blue;
      grid-template-columns: 0.1fr repeat(3, 1.4fr);
      grid-template-rows: 1fr;
      grid-template-areas: '. Web Mobile Backend';
      gap: 0px 0.5vw;
    }
    @media (max-aspect-ratio: 11/8) {
      grid-auto-columns: 1fr;
      grid-template-columns: 1fr;
      gap: 1vh 0px;
      grid-template-areas:
        'Web'
        'Mobile'
        'Backend';
      grid-area: 3 / 2 / 4 / 3;
    }
  }

  .Web {
    grid-area: Web;
    @media (max-aspect-ratio: 11/8) {
      height: fit-content;
    }
  }

  .Mobile {
    grid-area: Mobile;
    @media (max-aspect-ratio: 11/8) {
      height: fit-content;
    }
  }

  .Backend {
    grid-area: Backend;
    @media (max-aspect-ratio: 11/8) {
      height: fit-content;
    }
  }
</style>
