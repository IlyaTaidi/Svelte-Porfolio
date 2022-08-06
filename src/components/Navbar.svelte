<script lang="ts">
  import { fade } from 'svelte/transition';
  import { transitionOver } from '../lib/pageLoad';

  let fadeIn;

  transitionOver.subscribe((data) => {
    fadeIn = data;
  });
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
{#if fadeIn}
  <nav transition:fade={{ duration: 2000, delay: 1000 }}>
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318 303">
      <defs>
        <linearGradient id="Gradient2">
          <stop offset="0%" stop-color="#cbaffe" />
          <stop offset="50%" stop-color="#85a7e9" />
          <stop offset="100%" stop-color="#25273e" />
        </linearGradient>
      </defs>
      <style>
        .navLogo {
          fill: url(#Gradient2);
          stroke: url(#Gradient2);
          stroke-width: 10px;
        }
      </style>
      <path
        fill-rule="evenodd"
        class="navLogo"
        d="m150.1 7.6c35-2.5 66.5 6.4 95.4 25 10.3 6.7 19 15.2 27.8 23.9 14.9 14.9 24.6 32.6 31.3 52 3.5 10 4.7 20.8 6.2 31.4 0.9 6.2 0.3 12.6 0.2 18.9-0.9 30.1-11.6 56.5-30.5 79.4-7.7 9.3-16.3 18.1-25.7 25.5-18 14.3-38.6 23.9-61.2 28.3-8.8 1.7-17.8 2.5-26.8 3.3-22.5 2.2-44.2-1.9-65.1-9.8-17.5-6.6-33.2-16.3-47.3-28.9-14.9-13.3-27.1-28.8-35.2-46.9-5.2-11.6-7.9-24.4-11-36.9-1.6-6.5-2.3-13.3-2.2-20 0.2-8.5 0.7-17.1 2.6-25.4 2.3-10.6 5.1-21.4 9.5-31.3 4.5-10.3 10.5-20.2 17.3-29.2 10.6-14.1 23.4-26.1 38.4-35.4 17.4-10.8 35.9-18.6 56.3-21.7 6.4-0.9 13-1.5 20-2.2zm-139.9 136.4c-0.3 13.9 0.6 27.6 4.1 41.2 6.1 23 17.3 42.8 33.3 60 14.3 15.4 31.4 26.9 50.9 35.1 15.7 6.6 32 10.6 48.8 11.7 23 1.5 45.6-1.3 67.3-9.7 18.3-7 35.2-16.7 49.1-30.7 8.8-8.8 16.8-18.8 23.8-29.1 11.8-17.4 18.1-37.2 20-57.9 1.9-20.9-0.6-41.7-8.5-61.5-6.9-17.3-16.5-32.9-29.5-46.4-14.5-14.8-31.3-26.1-50.4-34-17.3-7.2-35.3-11.8-54.2-11.7-10.6 0-21.3 1.2-32 2.1-15.9 1.3-30.5 7.3-44.5 14.3-18.4 9.1-34.9 21.2-47.2 37.9-6.5 8.8-12.7 18.1-17.8 27.8-8 15.5-12.1 32.4-13.2 50.9z" />
      <path
        class="navLogo"
        d="m226.6 248.7c-7.1 0.2-10.9-3.4-9.4-9.9 2.4-10.6 5.8-20.9 8.7-31.4 1-3.7 1.8-7.3 2.8-11.4-11.6 2.1-22 5.1-32.5 5.7-15 0.8-30.3 2.2-44.2-5.7-9.4-5.3-14.6-13.3-14.9-24-0.4-13.1 3.5-24.8 10.3-36.2 9-15.2 22.2-25.1 36.8-33.8 12.1-7.2 24.9-12.5 38.4-16.2 16.3-4.6 32.5-6.4 48.3 1.6 8.5 4.3 13.7 11.5 13.9 20.8 0.1 9.5-5 17.3-11.6 23.7-3.4 3.2-7.6 5.6-11.1 8.7-2.5 2-4.7 2.2-6.3-0.4-1.3-2.3-1.6-4.4 1.6-6.5 7-4.6 13.2-10.1 17.3-17.7 2.3-4.4 1.7-12.8-1.7-16.5-6.1-6.7-14.2-8.8-22.6-9.4-11.2-0.9-22 1.4-32.3 5.9-10.7 4.6-21.8 8.6-31.9 14.2-12.5 6.9-23.4 16.2-31.3 28.4-5.8 9.1-9.8 18.9-9.9 29.9-0.1 16.8 8.9 22 22.3 24.3 22.5 3.9 44.4-0.9 66-6.8 2.2-0.6 4.7-0.2 7-0.2-0.1 2.5 0.3 5.1-0.4 7.4-4.6 14.6-9.6 29.2-14.3 43.8-0.4 1.3-0.3 3.7 0.6 4.4 3 2.3 2.2 4.6 0.4 7.3z" />
      <path
        class="navLogo"
        d="m213.7 69c3.3 0.8 6.4 1.3 9.1 2.5 1 0.4 2.3 3.1 2 3.4-1.1 1.4-2.9 3.1-4.4 3-8-0.3-16-1.5-24-1.8-6.4-0.2-12.8 0.4-19.2 1-1.7 0.2-3.6 1.6-4.7 3-16.3 20.5-32.8 40.8-48.6 61.6-8.7 11.6-16.2 24.1-24.2 36.1-0.3 0.5-0.5 1.1-0.8 1.9 10.4 1.4 21.1-2 30.7 3.3 1.3 0.6 2.4 1.6 3.5 2.4-1.2 4.7-3.5 5.2-7.8 3.8-10.3-3.3-21-2.1-31.4-0.6-14.1 2.1-28.1 4.7-42.4 7.1-0.9-4.4-0.7-7 3.9-7.8 9.7-1.7 19.3-3.8 28.9-6 2-0.5 4.6-1.8 5.5-3.5 10.3-18.2 21.9-35.4 34.9-51.6 7.7-9.7 14.9-19.6 22.5-29.3 3.9-5 8.3-9.7 12.4-14.6 1.1-1.3 1.9-2.7 3.7-5.4-9.5 1.1-17.4 1.8-25.2 3.1-6.2 0.9-12.2 2.9-18.4 3.9-1.4 0.3-3.8-1.1-4.4-2.4-0.5-1.1 0.6-3.9 1.8-4.5 3.1-1.6 6.5-3 9.9-3.5q17.7-2.4 35.5-4c9.8-1 19.6-1.7 29.5-2 7-0.2 14.1 0.6 21.7 0.9z" />
    </svg>
    <input type="checkbox" id="nav" class="hidden" />
    <label for="nav" class="nav-open"><i /><i /><i /></label>
    <div class="nav-container">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </div>
  </nav>
{/if}

<style lang="scss">
  @import '../variables.scss';
  nav {
    font-family: $titleFont;
    position: absolute;
    width: 100%;
    height: 9vh;
    display: flex;
    ul {
      float: right;
      margin: 1.5em 1.5em 0 0;
      li {
        display: inline-block;
        float: left;
        a {
          display: inline-block;
          outline: none;
          color: $darkBlue;
          font-size: 16px;
          text-decoration: none;
          letter-spacing: 0.04em;
          &:hover {
            color: $lightBlue;
            text-decoration: none;
          }
          &:active {
            color: #46546e;
          }
        }
        &:not(:first-child) {
          margin-left: 25px;
        }
      }
    }
    svg {
      margin: 20px;
      cursor: pointer;
      @media (min-aspect-ratio: 11/8) {
        width: 40px !important;
        height: 40px !important;
      }

      @media (max-aspect-ratio: 11/8) {
        width: 25px !important;
        height: 25px !important;
      }
    }
  }
  .nav-container {
    float: right;
    width: 100%;
  }
  @media screen and (max-aspect-ratio: 11/8) {
    .nav-container {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      z-index: -1;
      backdrop-filter: blur(20px);
      background: #0000004d;
      opacity: 0;
      transition: all 0.2s ease;
      ul {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 88vw;
        li {
          display: block;
          float: none;
          width: 100%;
          text-align: right;
          margin-bottom: 10px;
          &:nth-child(1) a {
            transition-delay: 0.2s;
          }
          &:nth-child(2) a {
            transition-delay: 0.3s;
          }
          &:nth-child(3) a {
            transition-delay: 0.4s;
          }
          &:nth-child(4) a {
            transition-delay: 0.5s;
          }
          &:not(:first-child) {
            margin-left: 0;
          }
          a {
            padding: 10px 25px;
            opacity: 0;
            color: #fff;
            font-size: 24px;
            font-weight: 600;
            transform: translateY(-20px);
            transition: all 0.2s ease;
          }
        }
      }
    }
    .nav-open {
      position: fixed;
      right: 10px;
      top: 10px;
      display: block;
      width: 48px;
      height: 48px;
      cursor: pointer;
      z-index: 9999;
      border-radius: 50%;
      i {
        display: block;
        width: 20px;
        height: 2px;
        background: $darkBlue;
        border-radius: 2px;
        margin-left: 14px;
        &:nth-child(1) {
          margin-top: 16px;
        }
        &:nth-child(2) {
          margin-top: 4px;
          opacity: 1;
        }
        &:nth-child(3) {
          margin-top: 4px;
        }
      }
    }
  }
  #nav:checked + .nav-open {
    transform: rotate(45deg);
  }
  #nav:checked + .nav-open i {
    background: #fff;
    transition: transform 0.2s ease;
    &:nth-child(1) {
      transform: translateY(6px) rotate(180deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translateY(-6px) rotate(90deg);
    }
  }
  #nav:checked ~ .nav-container {
    z-index: 9990;
    opacity: 1;
    ul li a {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .hidden {
    display: none;
  }
</style>
