<script>
  import { onMount } from 'svelte';
  import { quadInOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  const timeline = [
    {
      year: 2016,
      label: 'Facilities Maintenance Technician',
    },
    { year: 2018, label: 'Information Technology Support Engineer' },
    { year: 2019, label: 'Field IT Systems Administrator' },
    { year: 2020, label: 'Front End Web Developer' },
    { year: 2022, label: 'Software Designer and Engineer' },
  ];
  const width = 900;

  const duration = 1000;
  let index = tweened(0, { duration, easing: quadInOut });
  let dotSize = tweened(8, { duration: 200, easing: quadInOut });

  onMount(() => {
    function next() {
      $dotSize = 3;
      if ($index < timeline.length - 1) {
        $index++;
      } else {
        $index = 0;
      }
      setTimeout(() => ($dotSize = 8), 700);
    }
    const interval = setInterval(next, 3000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<svg viewBox="{-67 + $index * 200} 0 {width / timeline.length} 120">
  <line x1="20" y1="95" x2={30 + $index * 200} y2="95" stroke="black" />

  {#each timeline as event, i}
    <g>
      <text
        class="label"
        x={25 + i * 40 * timeline.length}
        y="20"
        text-anchor="middle">{event.label}</text>
      <text
        class="year"
        x={25 + i * 40 * timeline.length}
        y="60"
        text-anchor="middle">{event.year}</text>
      <circle cx={25 + i * 40 * timeline.length} cy="95" r={$dotSize} />
    </g>
  {/each}
</svg>

<style lang="scss">
  @import '../variables.scss';
  svg {
    overflow: visible;
    width: 100%;
    height: 100%;
  }
  text {
    font-weight: $titleWeight;
  }
  .label {
    font-family: $titleFont;
    fill: $blue;
    @media (min-aspect-ratio: 11/8) {
      font-size: 10px;
    }
    @media (max-aspect-ratio: 11/8) {
      font-size: 64%;
    }
  }
  .year {
    font-family: $textFont;
    fill: $evenLighterBlue;
    font-weight: 200;
    @media (min-aspect-ratio: 11/8) {
      font-size: calc(13px + 0.3vh + 0.3vw);
    }
    @media (max-aspect-ratio: 11/8) {
      font-size: 80%;
    }
  }
  line {
    stroke-width: 5px;
    stroke: $evenLighterBlue;
    stroke-dasharray: 2 2;
  }
  circle {
    fill: $teal;
  }
</style>
