<script>
  import { fade, fly } from 'svelte/transition';
  import Icon from '@iconify/svelte';
  import DeviceDetector from 'svelte-device-detector';
  import Timeline from '../components/Timeline.svelte';
  import Contact from '../components/Contact.svelte';

  let cardState = 'ABOUT';
  let y;
  function handler(event) {
    cardState = event.target.innerText;
  }
  const width = 50;
  const height = 50;
  const duration = 400;
  const color = '#f34f29';
  const delay = 50;
  const skillIcons = [
    { icon: 'logos:typescript-icon', name: 'Typescript' },
    { icon: 'logos:python', name: 'Python' },
    { icon: 'logos:javascript', name: 'Javascript' },
    { icon: 'vscode-icons:file-type-html', name: 'HTML' },
    { icon: 'vscode-icons:file-type-css', name: 'CSS' },
    { icon: 'vscode-icons:file-type-sass', name: 'SASS' },
    { icon: 'logos:nodejs', name: 'NodeJS' },
    { icon: 'logos:svelte-icon', name: 'Svelte' },
    { icon: 'logos:react', name: 'React' },
    { icon: 'logos:angular-icon', name: 'Angular' },
    { icon: 'logos:vue', name: 'Vue' },
    { icon: 'fa-brands:git-square', name: 'Git' },
    { icon: 'logos:jquery', name: 'jQuery' },
    { icon: 'logos:elasticsearch', name: 'Elastic' },
    { icon: 'logos:ionic', name: 'Ionic' },
    { icon: 'logos:bootstrap', name: 'Bootstrap' },
    { icon: 'vscode-icons:file-type-sql', name: 'SQL' },
    { icon: 'logos:mysql', name: 'MySQL' },
    { icon: 'logos:firebase', name: 'Firebase' },
    { icon: 'logos:jira', name: 'Jira' },
    { icon: 'logos:trello', name: 'Trello' },
    { icon: 'vscode-icons:file-type-maya', name: 'Maya' },
  ];
  const skillIconsMobile = [
    { icon: 'logos:typescript-icon', name: 'Typescript' },
    { icon: 'logos:python', name: 'Python' },
    { icon: 'logos:javascript', name: 'Javascript' },
    { icon: 'logos:nodejs', name: 'NodeJS' },
    { icon: 'logos:svelte-icon', name: 'Svelte' },
    { icon: 'logos:react', name: 'React' },
    { icon: 'logos:angular-icon', name: 'Angular' },
    { icon: 'logos:vue', name: 'Vue' },
  ];
</script>

<svelte:window bind:scrollY={y} />
<div class="S2">
  {#if y >= 150}
    <div class="S2Card" transition:fade={{ duration: 1100, delay: 300 }}>
      <div class="S2Buttons">
        <p on:click={(e) => handler(e)} class:selected={cardState === 'ABOUT'}>
          ABOUT
        </p>
        <p
          on:click={(e) => handler(e)}
          class:selected={cardState === 'EXPERIENCE'}>
          EXPERIENCE
        </p>
        <p
          on:click={(e) => handler(e)}
          class:selected={cardState === 'CONTACT'}>
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
          <h2 class="S2Job">Software Engineer</h2>
        </div>
        <DeviceDetector showInDevice="desktop">
          {#if cardState === 'ABOUT'}
            <div class="S2About" transition:fly={{ x: -100, duration, delay }}>
              <p class="AboutHeader">About Me</p>
              <p class="AboutContent">
                I'm a self taught Full Stack Developer with a passion for
                Design. Born and Raised in Ukraine, Currently residing in
                Florida.
                <br />
                <br />
                Whether it's Designing/Building beautiful PWA's, Building complex
                database structures in Firebase or creating unique user experiences;
                I will bring your ideas to life.
              </p>
              <p class="AboutSkills">Technologies and Tools</p>
              <div class="AboutFooter">
                {#each skillIcons as { icon, name }}
                  <div class="icon">
                    {#if name === 'Git'}
                      <Icon {icon} {width} {height} {color} />
                      <p class="iconName">{name}</p>
                    {:else if name !== 'Git'}
                      <Icon {icon} {width} {height} />
                      <p class="iconName">{name}</p>
                    {/if}
                  </div>
                {/each}
                {#each skillIconsMobile as { icon, name }}
                  <div class="iconMobile">
                    <Icon {icon} {width} {height} />
                    <p class="iconName">{name}</p>
                  </div>
                {/each}
              </div>
            </div>
          {/if}
          {#if cardState === 'EXPERIENCE'}
            <div
              class="S2Experience"
              transition:fly={{ x: -100, duration, delay }}>
              <Timeline />
            </div>
          {/if}
          {#if cardState === 'CONTACT'}
            <div
              class="S2Contact"
              transition:fly={{ x: -100, duration, delay }}>
              <Contact />
            </div>
          {/if}
        </DeviceDetector>

        <DeviceDetector showInDevice="mobile">
          {#if cardState === 'ABOUT'}
            <div class="S2About" transition:fly={{ y: 100, duration, delay }}>
              <p class="AboutHeader">About Me</p>
              <p class="AboutContent">
                I'm a self taught Full Stack Developer with a passion for
                Design. Born and Raised in Ukraine, Currently residing in
                Florida.
                <br />
                <br />
                Whether it's Designing/Building beautiful PWA's, Building complex
                database structures in Firebase or creating unique user experiences;
                I will bring your ideas to life.
              </p>
              <p class="AboutSkills">Technologies and Tools</p>
              <div class="AboutFooter">
                {#each skillIconsMobile as { icon, name }}
                  <div class="iconMobile">
                    <Icon {icon} {width} {height} />
                    <p class="iconName">{name}</p>
                  </div>
                {/each}
                {#each skillIcons as { icon, name }}
                  <div class="icon">
                    {#if name === 'Git'}
                      <Icon {icon} {width} {height} {color} />
                      <p class="iconName">{name}</p>
                    {:else if name !== 'Git'}
                      <Icon {icon} {width} {height} />
                      <p class="iconName">{name}</p>
                    {/if}
                  </div>
                {/each}
              </div>
            </div>
          {/if}
          {#if cardState === 'EXPERIENCE'}
            <div
              class="S2Experience"
              transition:fly={{ y: 100, duration, delay }}>
              <Timeline />
            </div>
          {/if}
          {#if cardState === 'CONTACT'}
            <div class="S2Contact" transition:fly={{ y: 100, duration, delay }}>
              <Contact />
            </div>
          {/if}
        </DeviceDetector>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  @import '../variables.scss';
  .S2 {
    display: grid;
    height: 100vh;
    gap: 0px 0px;
    grid-template-areas:
      '. . .'
      '. S2Card .'
      '. . .';
    @media (min-aspect-ratio: 11/8) {
      width: 100vw;
      grid-template-columns: 0.4fr 2.2fr 0.4fr;
      grid-template-rows: 0.5fr 1.9fr 0.6fr;
    }
    @media (max-aspect-ratio: 11/8) {
      width: fit-content;
      grid-template-columns: 4vw 90vw 3vw;
      grid-template-rows: 0.5fr 1.9fr 0.6fr;
    }
  }

  .S2Card {
    display: grid;
    width: 100%;
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
    font-family: $title;
    font-size: $medium;
    font-weight: $bolder;
    color: #9aa8d18c;
    display: flex;
    cursor: pointer;
    text-align: center;

    p {
      flex: 1 1 auto;
      transition: 0.3s;
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
    }
  }

  .selected {
    transition: 0.3s;
    color: white;
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
    @media (min-aspect-ratio: 11/8) {
      height: 79vh;
      overflow: hidden;
    }
    @media (max-aspect-ratio: 11/8) {
      height: 80vh;
      overflow: visible;
    }
  }

  .S2Header {
    grid-area: 1 / 1 / 2 / 2;
    display: grid;
    place-items: center;
    width: 100%;
    border-bottom: 1px solid $blue;
    padding-bottom: 1.5vh;
    gap: 4px 0px;
    font-family: $title;
  }

  .S2About {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-areas:
      'AboutHeader'
      'AboutContent'
      'AboutSkills'
      'AboutFooter';
    grid-area: 2 / 1 / 3 / 2;
    width: 100%;
    @media (min-aspect-ratio: 11/8) {
      gap: 2vh 0px;
      margin: 1em 0 2em 2em;
    }
    @media (max-aspect-ratio: 11/8) {
      margin-left: 4vw;
    }
  }

  .AboutHeader {
    grid-area: AboutHeader;
    font-family: $title;
    font-weight: $bolder;
    font-size: $medium;
    color: $blue;
  }

  .AboutContent {
    grid-area: AboutContent;
    font-family: $content;
    font-weight: $thiner;
    font-size: $small;
  }

  .AboutFooter {
    grid-area: AboutFooter;
    text-align: center;
    display: grid;
    @media (min-aspect-ratio: 11/8) {
      grid-auto-rows: 96px;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, [col-start] 5.3vw [col-end]);
    }
    @media (max-aspect-ratio: 11/8) {
      grid-auto-rows: 10vh;
      gap: 1vh;
      grid-template-columns: repeat(auto-fit, [col-start] 20vw [col-end]);
    }
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
    gap: 6px;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6);
    }
    @media (max-aspect-ratio: 11/8) {
      display: none;
    }
  }

  .iconMobile {
    gap: 6px;
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
  .iconName {
    font-family: $content;
    font-weight: $normal;
    font-size: $xsmall;
  }

  .AboutSkills {
    grid-area: AboutSkills;
    font-family: $title;
    font-weight: $bolder;
    font-size: $medium;
    color: $blue;
  }

  .S2Experience {
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    height: 51vh;
    @media (min-aspect-ratio: 11/8) {
      padding: 2.5vh;
      overflow: visible;
    }
    @media (max-aspect-ratio: 11/8) {
      width: 90vw;
      overflow: hidden;
    }
  }

  .S2Contact {
    grid-area: 2 / 1 / 3 / 2;
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
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
    font-family: $title;
    font-size: $large;
    font-weight: $bolder;
    text-align: center;
    white-space: nowrap;
    color: white;
  }

  .S2Job {
    font-family: $content;
    font-size: $small;
    font-weight: $normal;
    color: $lightPurple;
    opacity: 0.7;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
  }
</style>
