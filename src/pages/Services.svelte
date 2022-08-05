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
          content="I specialize in building fully functional, robust, and scalable web applications. I build custom web apps using the technology stack that best aligns with your specific project objective. My web application development services include design, development, testing, support and maintenance. Along with that, I will also help you in technology consultation, modernizing legacy architectures, or migrating to new web architectures." />
      </div>
      <div class="Mobile">
        <Card
          title="Mobile Application Development"
          icon={mobileSVG}
          content="I offer a full cycle of application design, integration and management. Whether it's a consumer oriented app or a transformative enterprise-class solution, I will lead the mobile app development process from ideation and conception to delivery and ongoing support." />
      </div>
      <div class="Backend">
        <Card
          title="Backend Development"
          icon={chipSVG}
          content="I can provide high-quality back-end development services to both startups and large companies. Using RESTful API and other cutting-edge technologies to deliver outstanding results. I create solutions that will help you carry out your plans and bring your product to market faster" />
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