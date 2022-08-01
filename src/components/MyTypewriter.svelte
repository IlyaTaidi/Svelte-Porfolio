<script lang="ts">
  import Typewriter from 'svelte-typewriter';
  import type { TypewriterProps } from 'svelte-typewriter/types/typewriter.d';

  const typewriterContent = [
    'Artist',
    'Developer',
    'Designer',
    'Musician',
    'Maker',
  ];
  const typewriterProps = {
    mode: 'loopRandom',
    interval: 150,
    delay: 100,
    unwriteInterval: 150,
  } as TypewriterProps;
</script>

<Typewriter {...typewriterProps}>
  {#each typewriterContent as position}
    <p class="typewriter">{position}</p>
  {/each}
</Typewriter>

<style lang="scss">
  @import '../variables.scss';
  .typewriter {
    font-weight: 600;
    color: $teal;
    font-size: $largeFont;
    @media (min-aspect-ratio: 11/8) and (max-aspect-ratio: 32/15) {
      margin-left: 0.3em;
    }
  }
</style>
