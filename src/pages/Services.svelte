<script>
  import { fly } from 'svelte/transition';
  import * as animateScroll from 'svelte-scrollto';
  import chipSVG from '../assets/chip';
  import mobileSVG from '../assets/mobile';
  import webSVG from '../assets/web';
  // @ts-ignore
  import Card from '../components/Card.svelte';

  let y;
  const duration = 900;
  const delay = 50;
</script>

<svelte:window bind:scrollY={y} />
<div class="S3Container">
  {#if y >= 1160}
    <div class="ServicesHeader" transition:fly={{ duration, delay }}>
      <p class="ServiceHeaderText">MY SERVICES INCLUDE</p>
    </div>
    <div class="S3" transition:fly={{ duration, delay }}>
      <div class="Web">
        <Card
          title="Web Application Development"
          icon={webSVG}
          content="I specialize in building fully functional, robust, and scalable web applications. I build custom web apps using the technology stack that best aligns with your specific project objectives. My web application development services include design, development, testing, support and maintenance. Along with that, I will also help you with technology consultation, modernizing legacy architectures, or migrating to new web architectures." />
      </div>
      <div class="Mobile">
        <Card
          title="Mobile Application Development"
          icon={mobileSVG}
          content="I offer a full cycle of application design, integration, and management. Whether it's a consumer-oriented app or a transformative enterprise-class solution, I will lead the mobile app development process from ideation and conception to delivery and ongoing support." />
      </div>
      <div class="Backend">
        <Card
          title="Backend Development"
          icon={chipSVG}
          content="I can provide high-quality back-end development services to both startups and large companies by building robust back-end software across multiple devices and platforms. I aim to create fault-tolerant back-ends for native and cross-platform applications using the latest technology trends." />
      </div>
    </div>
    <button class="noselect" on:click={() => animateScroll.scrollToTop()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path
          d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
      </svg>
    </button>
  {/if}
</div>

<style lang="scss">
  @import '../variables.scss';

  .noselect {
    grid-area: noselect;
    width: 75px;
    height: 75px;
    cursor: pointer;
    background-color: #5de6de;
    background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
    border: none;
    border-radius: 50%;
    transition: 200ms;
    &:hover {
      width: 80px;
      height: 80px;
    }
    @media (min-aspect-ratio: 11/8) {
      margin: auto;
      width: 75px;
      height: 75px;
      &:before {
        font-size: $small;
        font-weight: $bolder;
        font-family: $title;
        content: 'Back to Top';
        position: absolute;
        transform: translateX(-50%) translateY(45px);
        transition: 200ms;
        color: transparent;
      }
      &:hover {
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        svg {
          animation: bounce 2s infinite linear;
        }
        &:before {
          color: #fff;
        }
      }
      &:focus {
        outline: none;
      }
    }
    @media (max-aspect-ratio: 11/8) {
      margin: 3.5vh auto 1vh;
      width: 55px;
      height: 55px;
    }
    svg {
      fill: white;
      width: 30px;
      height: 30px;
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
    }
  }

  .S3Container {
    display: grid;
    height: 100vh;
    @media (min-aspect-ratio: 11/8) {
      grid-template-columns: 0.2fr 2.6fr 0.2fr;
      grid-template-rows: 0.1fr 0.3fr 1.3fr 0.3fr;
      gap: 0px 8vw;
      grid-template-areas:
        '. . .'
        '. ServicesHeader .'
        '. S3 .'
        '. noselect .';
    }
    @media (max-aspect-ratio: 11/8) {
      grid-template-columns: 0.1fr 2.6fr 0.1fr;
      grid-template-rows: 0.5fr 0.6fr 2.6fr 0.3fr;
      gap: 0px 0px;
      grid-template-areas:
        '. . .'
        '. ServicesHeader .'
        '. S3 .'
        '. noselect .';
    }
  }

  .ServicesHeader {
    cursor: pointer;
    display: grid;
    grid-area: ServicesHeader;
    border-bottom: 1px solid $purple;
    @media (min-aspect-ratio: 11/8) {
      grid-template-columns: 0.04fr repeat(2, 1.3fr) 1.4fr;
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
    font-size: $medium;
    font-family: $title;
    font-weight: $bolder;
    display: flex;
    align-items: end;
    margin-left: 0.5vw;
    margin: 0 0 0.2vh 0.5vw;
  }

  .S3 {
    display: grid;
    grid-area: S3;
    @media (min-aspect-ratio: 11/8) {
      border-left: 1px solid $blue;
      grid-template-columns: 0.04fr repeat(3, 1.4fr);
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
