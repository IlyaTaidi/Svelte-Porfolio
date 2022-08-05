<script lang="ts">
  import Typewriter from 'svelte-typewriter';
  import type { TypewriterProps } from 'svelte-typewriter/types/typewriter.d';

  const typewriterContent = [
    'Developer',
    'Designer',
    'Engineer',
    'Artist',
    'Maker',
  ];
  const typewriterProps = {
    mode: 'loop',
    interval: 150,
    delay: 100,
    unwriteInterval: 150,
  } as TypewriterProps;
</script>

<div class="typewriterContainer">
  <p class="typewriterPretext">I want to be your next</p>
  <Typewriter {...typewriterProps}>
    {#each typewriterContent as position}
      <p class="typewriterText">{position}</p>
    {/each}
  </Typewriter>
</div>

<style lang="scss">
  @import '../variables.scss';
  p {
    font-family: $title;
    font-weight: $bolder;
    font-size: $large;
  }
  .typewriterPretext {
    color: $lightBlue;
  }
  .typewriterText {
    color: $teal;
    @media (min-aspect-ratio: 11/8) {
      margin-left: 0.3em;
    }
  }
  .typewriterContainer {
    grid-area: typewriter;
    @media (min-aspect-ratio: 11/8) {
      display: flex;
    }
    @media (max-aspect-ratio: 11/8) {
      display: block;
    }
  }
</style>
