<script lang="ts">
  import Typewriter from 'svelte-typewriter';
  import type { TypewriterProps } from 'svelte-typewriter/types/typewriter.d';

  const typewriterContent = [
    'Artist',
    'Developer',
    'Designer',
    'Engineer',
    'Maker',
  ];
  const typewriterProps = {
    mode: 'loopRandom',
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
    font-family: $titleFont;
    font-weight: $titleWeight;
    @media (min-aspect-ratio: 11/8) and (max-aspect-ratio: 32/15) {
      font-size: $largeFont;
    }
    @media (min-aspect-ratio: 32/15), (max-aspect-ratio: 11/8) {
      font-size: $mediumFont;
    }
  }
  .typewriterPretext {
    color: $lightBlue;
  }
  .typewriterText {
    font-size: $mediumFont;
    color: $teal;
    @media (min-aspect-ratio: 11/8) and (max-aspect-ratio: 32/15) {
      margin-left: 0.3em;
    }
  }
  .typewriterContainer {
    grid-area: typewriter;
    @media (min-aspect-ratio: 11/8) and (max-aspect-ratio: 32/15) {
      display: flex;
    }
    @media (min-aspect-ratio: 32/15), (max-aspect-ratio: 11/8) {
      display: block;
    }
  }
</style>
