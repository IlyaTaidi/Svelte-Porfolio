<script>
  import { fade } from 'svelte/transition';
  import Icon from '@iconify/svelte';

  let cardState = 'ABOUT';

  function handler(event) {
    cardState = event.target.innerText;
  }
  const width = 50;
  const height = 50;
  const skillIcons = [
    'logos:typescript-icon',
    'logos:python',
    'logos:javascript',
    'vscode-icons:file-type-html',
    'vscode-icons:file-type-css',
    'vscode-icons:file-type-sass',
    'logos:nodejs',
    'logos:svelte-icon',
    'logos:react',
    'logos:angular-icon',
    'logos:vue',
    'fa-brands:git-square',
    'logos:jquery',
    'logos:elasticsearch',
    'logos:ionic',
    'logos:bootstrap',
    'vscode-icons:file-type-sql',
    'logos:mysql',
    'logos:firebase',
    'logos:jira',
    'logos:trello',
    'vscode-icons:file-type-maya',
  ];
  const skillIconsMobile = [
    'logos:typescript-icon',
    'logos:python',
    'logos:javascript',
    'logos:nodejs',
    'logos:svelte-icon',
    'logos:react',
    'logos:angular-icon',
    'logos:vue',
  ];
</script>

<div class="S2">
  <div class="S2Card">
    <div class="S2Buttons">
      <p on:click={(e) => handler(e)} class:selected={cardState === 'ABOUT'}>
        ABOUT
      </p>
      <p
        on:click={(e) => handler(e)}
        class:selected={cardState === 'EXPERIENCE'}>
        EXPERIENCE
      </p>
      <p on:click={(e) => handler(e)} class:selected={cardState === 'CONTACT'}>
        CONTACT
      </p>
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
        <div class="S2About" transition:fade>
          <p class="AboutHeader">About Me</p>
          <p class="AboutContent">
            I’m a self taught Full Stack Developer with experience in JS/TS,
            Python, Angular/Ionic, Cordova/Capacitor with a passion for Design.
            Living in Florida, born in Ukraine.
            <br />
            <br />
            Whether it’s creating servers in Node, Building complex database structures
            in Firebase, Designing/Building beautiful PWA’s or creating unique user
            experiences; I will bring your ideas to life.
          </p>
          <p class="AboutSkills">Technologies and Tools</p>
          <div class="AboutFooter">
            {#each skillIcons as icon}
              <div class="icon">
                <Icon {icon} {width} {height} />
              </div>
            {/each}
            {#each skillIconsMobile as icon}
              <div class="iconMobile">
                <Icon {icon} {width} {height} />
              </div>
            {/each}
          </div>
        </div>
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
    @media (min-aspect-ratio: 11/8) {
      grid-template-columns: 0.4fr 2.2fr 0.4fr;
      grid-template-rows: 0.5fr 1.9fr 0.6fr;
      gap: 0px 0px;

      grid-template-areas:
        '. . .'
        '. S2Card .'
        '. . .';
    }
  }

  .S2Card {
    display: grid;
    grid-area: S2Card;
    color: $evenLighterBlue;
    border-bottom: 1px solid $purple;
    @media (min-aspect-ratio: 11/8) {
      grid-template-columns: auto 1.8fr;
      grid-template-rows: 1fr;
      grid-template-areas: 'S2Buttons S2Main';
    }
    @media (max-aspect-ratio: 11/8) {
      gap: 2vh 0em;
      margin: 1em;
      padding-right: 10px;
      border-left: 1px solid $purple;
      grid-template-columns: 1fr;
      grid-template-rows: auto 0.3fr;
      grid-template-areas:
        'S2Main'
        'S2Buttons';
    }
  }

  .S2Buttons {
    grid-area: S2Buttons;
    display: flex;
    cursor: pointer;
    font-family: $titleFont;
    p {
      padding: 13px 4px;
      flex: 1 1 auto;
      transition: 0.3s;
      font-size: 26px;
      @media (min-aspect-ratio: 11/8) {
        &:hover {
          background: linear-gradient(
            to left,
            #cc92fc03 0%,
            #cc92fc0a 44%,
            #cc92fc26 100%
          );
          color: #ffffffd4;
        }
      }
      @media (max-aspect-ratio: 11/8) {
        &:hover {
          background: linear-gradient(
            to bottom,
            #cc92fc03 0%,
            #cc92fc0a 44%,
            #cc92fc26 100%
          );
          color: #ffffffd4;
        }
      }
    }
    @media (min-aspect-ratio: 11/8) {
      writing-mode: vertical-lr;
      flex-direction: row;
      width: 2.5vw;
      transform: scale(-1);
      border-left: 1px solid $purple;
    }
    @media (max-aspect-ratio: 11/8) {
      align-self: end;
      text-align: center;
    }
  }
  .selected {
    transition: 0.3s;
    color: #ffffffd4;

    @media (min-aspect-ratio: 11/8) {
      background: linear-gradient(
        to left,
        #cc92fc03 0%,
        #cc92fc0a 44%,
        #cc92fc26 100%
      );
    }
    @media (max-aspect-ratio: 11/8) {
      background: linear-gradient(
        to bottom,
        #cc92fc00 0%,
        #cc92fc0a 44%,
        #cc92fc26 100%
      );
    }
  }
  .S2Main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 1.6fr;
    gap: 20px 0px;

    grid-area: S2Main;
    place-items: center;
  }

  .S2Header {
    grid-area: 1 / 1 / 2 / 2;
    display: grid;
    place-items: center;
    width: 100%;
    border-bottom: 1px solid $blue;
    padding-bottom: 1.5vh;
    gap: 4px 0px;
    font-family: $titleFont;
  }

  .S2About {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    gap: 2vh 0px;
    grid-template-areas:
      'AboutHeader'
      'AboutContent'
      'AboutSkills'
      'AboutFooter';
    grid-area: 2 / 1 / 3 / 2;
    width: 100%;

    @media (min-aspect-ratio: 11/8) {
      padding-left: 2vw;
    }
    @media (max-aspect-ratio: 11/8) {
      padding-left: 1.5em;
    }
  }
  .AboutHeader {
    grid-area: AboutHeader;
    font-family: $titleFont;
    font-weight: 600;
    font-size: 24px;
  }
  .AboutContent {
    grid-area: AboutContent;
    font-family: $textFont;
    font-weight: 200;
  }
  .AboutFooter {
    grid-area: AboutFooter;
    display: grid;
    gap: 1rem;
    grid-auto-rows: 75px;
    @media (min-aspect-ratio: 11/8) {
      grid-template-columns: repeat(auto-fit, [col-start] 108px [col-end]);
    }
    @media (max-aspect-ratio: 11/8) {
      grid-template-columns: repeat(auto-fit, [col-start] 75px [col-end]);
    }
    .icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #cc92fc3d;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
      height: 100%;
      width: 100%;
      border-radius: 4px;
      transition: all 500ms;
      &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6);
      }
      @media (max-aspect-ratio: 11/8) {
        display: none;
      }
    }
    .iconMobile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #cc92fc3d;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
      height: 100%;
      width: 100%;
      border-radius: 4px;
      transition: all 500ms;
      &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6);
      }
      @media (min-aspect-ratio: 11/8) {
        display: none;
      }
    }
  }
  .AboutSkills {
    grid-area: AboutSkills;
    font-family: $titleFont;
    font-weight: 600;
    font-size: 24px;
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
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    font-family: $titleFont;
    color: white;
  }

  .S2Job {
    font-family: $textFont;
    font-size: 1em;
    white-space: nowrap;
    font-weight: 300;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    color: $lightPurple;
  }
</style>
